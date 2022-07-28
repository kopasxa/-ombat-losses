import React from 'react'
import DatePicker from 'react-date-picker';
import moment from 'moment';
import Classes from '../styles/Header.module.css'

const Header = (props) => {
    return (
        <header className={Classes.header}>
            {
                props.date > new Date(2022, 1, 25) 
                ? 
                <div className={Classes.arrow} onClick={() => {props.setDate(new Date(moment(props.date).add(-1, 'days')))}}>
                    <img className={Classes.img} src="https://img.icons8.com/external-solid-style-bomsymbols-/344/external-arrow-web-design-device-solid-style-set-2-solid-style-bomsymbols--5.png" alt="arrow_left"/>
                </div>
                :
                <div></div>
            }

            <DatePicker clearIcon={null} openCalendarOnFocus={false} showLeadingZeros={true} onChange={props.setDate} value={props.date} minDate={new Date(2022, 1, 25) } maxDate={new Date()}/>

            {
                props.date < new Date(moment(new Date()).add(-1, 'days'))
                ? 
                <div className={Classes.arrow} onClick={() => {props.setDate(new Date(moment(props.date).add(1, 'days')))}}>
                    <img className={Classes.img} style={{transform: "rotate(180deg)"}} src="https://img.icons8.com/external-solid-style-bomsymbols-/344/external-arrow-web-design-device-solid-style-set-2-solid-style-bomsymbols--5.png" alt="arrow_left"/>
                </div>
                :
                <div></div>
            }
        </header>
    )
}

export default Header