require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

var imagesData = require('../data/imagesData.json');

imagesData=(function getImageURL(imagesDataArr) {
  for(var i=0;i<imagesDataArr.length;++i){
    var singleImageData=imagesDataArr[i];
    singleImageData.imageURL=require('../images/'+singleImageData.filename);
    imagesDataArr[i]=singleImageData;
  }
  return imagesData;
})(imagesData);

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-sec">
        </section>
        <nav className="controller-nav">
        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
