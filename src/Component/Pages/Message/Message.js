import React from 'react';

const Message = () => {
    return (
        <div className="col-12 col-lg-6 d-flex container my-5">
            <div>
                <img className="img-fluid" src="https://images.squarespace-cdn.com/content/v1/54bd1a0ae4b089bfaddc239e/1442346394386-0VPAGCCT1NUV6OD2FNS8/image-asset.jpeg?format=500w" alt="" />
            </div>
            <div className="col mx-auto my-5">
                <h4 className="d-inline">Contact Us</h4>
                <br />
                <div  className="d-flex my-3">
                <div>
                    <h5>Duffy Health Center</h5>
                    <h5>94 Main Street</h5>
                    <h5>Hyannis, MA 02601 </h5>
                </div>
                <div className="ms-5">
                    <h5>Clinic: (508) 771-9599</h5>
                    <h5>Administration: (508) 771-7517</h5>
                    <h5>Fax: (508) 771-1986</h5>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Message;