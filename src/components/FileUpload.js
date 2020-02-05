import React, { Component } from 'react';
import * as firebase from "../Firebase"
import "../assets/fileStyle.css"
import Files from "react-files"
const uuidv4 = require('uuid/v4');

class FileUpload extends Component {


    constructor(props) {
        super(props)
        this.state = {
            files: [],
            route:"/files/",
            fileName:""
        }
        this.createFile.bind(this)
        this.onFilesError.bind(this)
    }

    onFilesChange = (files) => {
            var fileName = files[0].name
            this.setState({...this.state, fileName: fileName})
            firebase.storage.ref(this.state.route).child(fileName).put(files[0])
            .then((snapshot)=>{
                this.setState({files})
                this.props.onFile(snapshot.ref.fullPath)
            })
            .catch((error)=>this.props.throwError(error.message))
        
    }

    onFilesError = (error, file) => {
        this.props.throwError(error.message)
    }

    fileRemove = () => {
        firebase.storage.ref(this.state.route).child(this.state.fileName).delete().then(()=>{
            this.setState({
                files: []
            })
            this.props.onFile("")
        }).catch((error)=>this.props.throwError(error.message))
        
        
    }


    render() {
        return this.state.files.length > 0 ?
            <div className='files-list-item' style={{marginBottom : "10px"}} >
                <div className='files-list-item-preview'>
                    {this.state.files[0].preview.type === 'image'
                        ? <img className='files-list-item-preview-image' alt="preview" src={this.state.files[0].preview.url} />
                        : <div className='files-list-item-preview-extension'>{this.state.files[0].extension}</div>}
                </div>
                <div className='files-list-item-content'>
                    <div className='files-list-item-content-item files-list-item-content-item-1'>{this.state.files[0].name}</div>
                    <div className='files-list-item-content-item files-list-item-content-item-2'>{this.state.files[0].sizeReadable}</div>
                </div>
                <div
                    id={this.state.files[0].id}
                    className='files-list-item-remove'
                    onClick={this.fileRemove.bind(this)}/>
            </div> :
            <div>
            <Files
                ref='files'
                className='files-dropzone-list'
                style={{ height: '100px', width: "40%" }}
                accepts={this.props.accepts}
                onChange={this.onFilesChange}
                onError={this.onFilesError}
                multiple={false}
                clickable
            >
                Drop files here or click to upload
                </Files>
                {this.props.error ? <p style={{fontSize:"80%", color: "#dc3545"}}>{this.props.error}</p>:<div></div>}
            </div>
            


    }

    componentDidMount() {
        if (this.props.url !== "") {
            this.createFile(this.props.url)
        }

    }

    async createFile(url) {
        firebase.storage.ref().child(url).getDownloadURL().then((firebaseURL) => {
            var xhr = new XMLHttpRequest();
            xhr.responseType = "blob"
            xhr.onload = (event) => {
                var file = this.getFileFromBlob(xhr.response, url, firebaseURL)
                this.setState({files : [file]})
            }
            xhr.open("GET", firebaseURL)
            xhr.send()
        }).catch((error) => {
        })
    }

    getFileFromBlob(blob, url, firebaseURL) {
        if (url.includes("files")) {
            var name = url.replace(/.*files\//i, "")
        }
        this.setState({fileName : name })
        var file = new File([blob], name, {type: blob.type})
        file.extension = name.substring(name.indexOf(".") + 1)
        file.id = uuidv4()
        var type = "unknown"
        if(url.includes("files")) {
            type = ".pdf"
        }
        file.preview = {
            type: type,
            url: firebaseURL
        }
        file.sizeReadable = Math.round(file.size/1000)+"kB"
        return file
    }
}

export default FileUpload;