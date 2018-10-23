import React, { Component } from 'react';
import { Label, Input } from 'reactstrap';
   

class Form extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        poster: '',
        comment: '',
      }
      this.onChange = this.onChange.bind(this);
      this.submitForm = this.submitForm.bind(this);
    }
    
    
    
    submitForm(e) {
      e.preventDefault();
      const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state),
       };
      
      fetch("http://92.175.11.66:3001/api/quests/movies/", config)
        .then(res => res.json())
        .then(res => {
            if (res.error) {
                alert(res.error);
            } else {
                alert(`Film envoyé avec l'ID ${res}!`);
            }
        }).catch(e => {
            console.error(e);
                alert('Erreur lors de l\'ajout d\'un Film');
                });
     }
     
    
    onChange(e) {
      this.setState({
        [e.target.name]: e.target.value,
      },() => console.log(this.state));
     }
     
    
    render() {
      return (
        <div className="App">
          <div className="FormEmployee">
            <h1>Saisi d'un employé</h1>
  
            <form onSubmit={this.submitForm}>
              <fieldset>
                <legend>Informations</legend>
                <div className="form-data">
                  <label htmlFor="lastname">Nom du Film</label>
                  <input
                    type="text"
                    id="nomdufilm"
                    name="name"
                    onChange={this.onChange}
                    value={this.state.nomdufilm}
                  />
                </div>
  
                <div className="form-data">
                  <label htmlFor="firstname">Poster</label>
                  <input
                    type="text"
                    id="poster"
                    name="poster"
                    onChange={this.onChange}
                    value={this.state.poster}
                  />
                </div>
  
                <div className="form-data">
                    <label for="exampleText">Un comment ? </label>
                    <textarea
                    id="area"
                    name="comment"
                    onChange={this.onChange}>
                    </textarea> 
                </div>
                <hr />
                <div className="form-data">
                  <input type="submit" value="Envoyer" />
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      );
    }
  }
  
  export default Form;
  