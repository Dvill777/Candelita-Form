import './App.css';
import { useState } from "react";
import Select from 'react-select';
import ios from './static/apple-brands-solid.svg'
import android from './static/android-brands-solid.svg'
import pwa from './static/pwa.webp'
import bell from './static/bell-solid.svg'
import { DatePicker } from 'rsuite';
import 'rsuite/dist/rsuite-no-reset.min.css'
import { FaClock } from 'react-icons/fa';

function App() {

  const options = [
    { value: 'opentheapp', label: 'Open the app' },
    { value: 'openanexternalLink', label: 'Open an external link' },
    { value: 'home', label: 'Home' },
    { value: 'radio', label: 'Radio' },
    { value: 'tv', label: 'Tv en Vivo' },
    { value: 'chat', label: 'Chat' },
    { value: 'ofrendas', label: 'Ofrendas' },
    { value: 'youtube', label: 'Youtube' },
    { value: 'facebook', label: 'Facebook' },
    { value: 'instagram', label: 'Intagram' },
    { value: 'oracion', label: 'Pedido de Oración' },
    { value: 'biblia', label: 'Biblia' },
    { value: 'verso', label: 'Verso del día' },
    { value: 'web', label: 'Web' },
    { value: 'Llamanos', label: 'Llámanos' },
    { value: 'ubicacion', label: 'Ubicación' },
    { value: 'podcast', label: 'Podcast' },
    { value: 'tiempo', label: 'El Tiempo' },
    { value: 'politica', label: 'Política de privacidad' },
    { value: 'fotos', label: 'Fotos' },
    { value: 'tyc', label: 'Términos y condiciones de venta' }

  ]


  const [isOpen, setIsOpen] = useState(false)


  return (
    <div className="App">
      <div className="title">
        <h1>Notifications</h1>
        <img src={require("./static/circle-question-solid.png")} alt="info" height={25} width={25} />
      </div>
      <div className="form">
        <div className="sec-1">
          <h4>Your Message:</h4>
          <textarea name="message" id="message" placeholder="Your Message" maxLength={256} ></textarea>
        </div>
        <div className="sec-2">
          <div className="title-btn">
            <h4>Select an action:</h4>
            <img src={require("./static/circle-question-solid.png")} alt="info" height={25} width={25} />
          </div>
          <Select className='action' name="select-form" id="select-form" options={options}></Select>
        </div>
        <div className="sec-3">
          <h4>Send this message:</h4>
          <div className='check-1'>
            <input type="checkbox" className="now" value="now" />
            <span>now</span>
            <input type="checkbox" value="date-specific" onClick={() => { isOpen ? setIsOpen(false) : setIsOpen(true) }} />
            <span>On a specific date</span>
          </div>
          <div className={`specific-date ${isOpen && "open"}`}>
            <DatePicker style={{ marginTop: 10, width: 910 }} />
            <div className='hour'>
              <DatePicker format="HH:mm:ss" caretAs={FaClock}  />
              <input type="checkbox" className="now" value="now" />
              <span>Local time</span>
              <img src={require("./static/circle-question-solid.png")} alt="info" height={15} width={15} />
            </div>
          </div>
        </div>
        <div className="sec-4">
          <h4>Recipents</h4>
          <p>Select the platform the notification will be sent on below:</p>
          <div className='checker'>
            <div className="system">
              <div className='box-check'>
                <input type="checkbox" />
                <img src={ios} alt="info" height={25} width={25} className='ios' />
              </div>
              <span>iOS</span>
            </div>
            <div className="system">
              <div className='box-check'>
                <input type="checkbox" name="" id="" />
                <img src={android} alt="info" height={25} width={25} />
              </div>
              <span>Android</span>
            </div>
            <div className="system">
              <div className='box-check'>
                <input type="checkbox" name="" id="" />
                <img src={pwa} alt="info" height={25} width={25} />
              </div>
              <span>Progressive Web App</span>
            </div>
          </div>
        </div>
        <div className="sec-5">
          <h4>iOS and Android users</h4>
          <div className='check-1'>
            <input type="radio" name="" id="" />
            <p>All</p>
            <input type="radio" name="" id="" />
            <p>Target</p>
          </div>
          <div className={`target ${isOpen && "open"}`}>

          </div>
        </div>
        <div className="sec-6">
          <h4>Notification settings</h4>
          <div className='noti-sec-1'>
            <img src={bell} alt="info" height={25} width={25} />
            <img src={require("./static/circle-question-solid.png")} alt="info" height={25} width={25} />
            <Select name="Notification settings" className='noti-sett' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
