import React, { Component } from 'react';
import PDF from './PDF';
import logo from './icone.png'

class Post extends Component {
    state = {
        title: '',
        content: '',
        image: '',
        postSubmitted: false
    }

    onChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    }

    sunmitPost = (e) => {
        
        if(!this.state.title || !this.state.content){
            alert('All fields are required!');
            e.preventDefault();
        }else{
            this.setState({
                postSubmitted: true
            });
        }
    }

    render(){
        return(
            <>
                {  !this.state.postSubmitted ? 
                    (<div className="container">
                        <div className="jumbotron mt-3">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="well well-sm">
                                        <form className="form-horizontal" method="post">
                                            <fieldset>
                                                <legend className="text-center header">
                                                    Par mail: varenergie@gmail.com - 
                                                    Vous nous contactez directement: +331 64 62 26 49 - 
                                                    Vous souhaitez joindre le web master: lpchampigny@hotmail.com
                                                </legend>
                                                    <img src={ logo } width="150px" alt="logo"/>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input onChange={this.onChange('title')} name="title" type="text" placeholder="Nom de votre Projet..." className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon">Votre photo est sur le cloud? Ajoutez l'adresse de votre album ou la photo seule.</i></span>
                                                    <input onChange={this.onChange('image')} name="image" type="text" placeholder="https://..." className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon"></i></span>
                                                    <textarea onChange={this.onChange('content')} className="form-control" name="content" placeholder="Décrivez votre projet... " rows="7"></textarea>
                                                </div>
                                                <div className="form-group">
                                                    <button type="button" onClick={this.sunmitPost} className="btn btn-primary btn-lg">Submit</button>
                                                </div>
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>) : (
                        <PDF title={this.state.title} content={this.state.content} image={this.state.image} />
                    )
                }
            </>
        );
    }
}

export default Post;