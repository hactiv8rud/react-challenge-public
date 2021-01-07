import React from 'react';

function NoItem(props) {
  return (
    <>
      <div className="justify-center">
        <div className="col-sm col-md-4 ml-3 mr-2">
          <div className="card mt-4">
            <div className="card-body">
              <h5 className="card-title text-center mb-0 text-primary">{props.text}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NoItem;
