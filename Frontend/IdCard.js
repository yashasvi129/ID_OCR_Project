import React,{useContext} from 'react'
import noteContext from '../context/noteContext'

const IdCard = (props) => {
    const { note ,updateNote} = props
    const context = useContext(noteContext)
    const {deleteNote} = context
    return (
        <div className="col-md-3 my-3">
            <div className ="card" >
                <div className ="card-body">
                <h5 className ="card-title">{note.title}</h5>
                <p className ="card-text">{note.description}</p>
                <i className="far fa-trash-alt mx-3 " onClick={()=>deleteNote(note._id)}></i>
                <i className="far fa-edit mx-3" onClick={()=>updateNote(note)}></i>
                </div>
            </div>
        </div>
    )
}

export default IdCard