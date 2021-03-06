import React, { Component } from 'react'

export default class Menu extends Component {
    constructor(props){
        super(props);
        this.state={
          open: this.props.open ? this.props.open : false,
        }
      }

      shouldComponentUpdate(nextProps){
        if(nextProps.open !== this.state.open){
          this.setState({open:nextProps.open});
          return true;
        } else {
          return false;
        }
      }

      render(){
        const styles={
          container: {
            position: 'fixed',
            top: 0,
            left: 0,
            height: this.state.open ? '100%' : 0,
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            background: 'white',
            opacity: 0.95,
            color: '#fafafa',
            transition: 'height 0.3s ease',
            zIndex: 3,
          },
          menuList: {
            paddingTop: '5rem',
          }
        }
        return(
          <div style={styles.container}>
            {
              this.state.open ?
                <div style={styles.menuList}>
                  {this.props.children}
                </div> 
                : null
            }
          </div>
        )
      }
}
