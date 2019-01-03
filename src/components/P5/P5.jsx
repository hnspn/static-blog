import React from 'react';
import P5 from 'p5';

export default class P5Wrapper extends React.Component {
  componentDidMount() {
    const { dom, sound, sketch } = this.props;
    const imports = []
    if (dom) {
      imports.push(import('p5/lib/addons/p5.dom.min'))
    }
    if (sound) {
      imports.push(import('p5/lib/addons/p5.sound.min'))
    }

    Promise.all(imports)
    .then(() => {
      this.canvas = new P5(sketch, this.wrapper);
      if( this.canvas.myCustomRedrawAccordingToNewPropsHandler ) {
        this.canvas.myCustomRedrawAccordingToNewPropsHandler(this.props);
      }
    })
    .catch(e => console.error(e));
  }

  componentWillReceiveProps(newprops) {
    const { sketch } = this.props;
    if(sketch !== newprops.sketch){
      this.wrapper.removeChild(this.wrapper.childNodes[0]);
      this.canvas = new P5(newprops.sketch, this.wrapper);
    }
    if( this.canvas.myCustomRedrawAccordingToNewPropsHandler ) {
      this.canvas.myCustomRedrawAccordingToNewPropsHandler(newprops);
    }
  }

  render() {
    return <div ref={wrapper => {this.wrapper = wrapper}} />;
  }
}