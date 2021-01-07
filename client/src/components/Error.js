import React from 'react';

function Error(props) {
  return (
    <>
        <div className="justify-center">
          <div className="col-sm col-md-4 ml-3 mr-2">
            <div className="card mt-4">
              <div className="card-body">
                <h3 className="card-title text-center text-primary">ERROR {props.error.status}</h3>
                <h6 className="card-text">{props.error.status_message}</h6>
                {
                  (props.error.err) && (
                    <p className="card-text">{props.error.err}</p>
                  ) 
                }
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default Error;
