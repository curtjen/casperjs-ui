var blocks = {
  start: {
    title: "start",
    options: {
      msg: '',
      url: 'http:google.com/'
    }

  },
  then: {
    title: "then",
    options: {
      msg: "THIS IS A THEN().",
      args: {

      }
    }
  }
};

var actions = {
  capture: {
    title: "capture",
    options: {
      file: 'capture.png',
      position: {
        top: 100,
        left: 100
      },
      dimensions: {
        height: 400,
        width: 500
      }
    }
  },
  click: {
    title: "click",
    options: {
      selector: 'h3.r a'
    }
  }
};