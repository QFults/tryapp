import React from 'react'


const ContactForm = () => {
  return (
    <div className="card m-3">
      <h2 className="card-title">Contact</h2>
      <hr />
      <div className="row single-post mt-5 no-gutters">
        <div className="card-body">
          <div className="col-md-12">
            <form>
              <div className="form-group">
                <label for="exampleInputName">Name</label>
                <input type="name" class="form-control" id="exampleInputName" aria-describedby="emailHelp"/>
                  <small id="emailHelp" class="form-text text-muted">Please write your full name here.</small>
                </div>
                <div className="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div className="form-group">
                    <label for="exampleFormControlTextarea1">Message</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

  )
  }  
export default ContactForm
