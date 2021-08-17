import React, { Component } from 'react'

export default class ProfileStatus extends Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }



    editStatusToggle = () => {
        this.setState({
            editMode: !this.state.editMode
        });
    }

    childBlur = (event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
            this.editStatusToggle();
        }
    }

    saveStatus = () => {
        this.props.saveStatus(this.state.status);
        this.editStatusToggle();
    }

    newStatusChange = (event) => {
        this.setState({
            status: event.target.value
        });
    }

    render() {
        return (
            <div className='profile__status'>
                {!this.state.editMode && 
                    <p onClick={this.editStatusToggle}>{this.props.status}</p>
                }
                {this.state.editMode &&  
                    <div className='modal' onBlur={this.childBlur} tabIndex='0'>
                        <div className='modal-input'>
                            <input autoFocus={true} onChange={this.newStatusChange} value={this.state.status} type='text' />
                        </div>
                        <div className='modal-accept'>
                            <button type='button' onClick={this.saveStatus}>Сохранить</button>
                        </div>
                    </div>
                }
            </div>
        )
    }
}
