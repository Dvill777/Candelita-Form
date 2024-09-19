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
import { setDate } from 'rsuite/esm/internals/utils/date';
import axios from 'axios'; 
import { CookiesProvider, useCookies } from 'react-cookie'
import { redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Dashboard() {
  const [message, setMessage] = useState("")
  const [messageTitle, setMessageTitle] = useState("")
  const [action, setAction] = useState()
  const [date, setDatex] = useState()
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  const [androidChecked, setAndroidChecked] = useState(false)
  const [iosChecked, setIosChecked] = useState(false)
  const [pwaChecked, setPwaChecked] = useState(false)
  const sendIt = ()=>{
    if (message !== "" && messageTitle !==""){

      axios.post('https://dev.candelitatv.com/message',{
        messageBody:message,
        messageTitle: messageTitle
      }).then((data)=>{
        alert('Notification sent successfully')
        console.log(data)
      }).catch((r)=>{console.error(r)})
    }
  }

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
  const handleLogout = () => {
    removeCookie('user');
    return redirect("/login");
  }
  if(cookies.user !== undefined){
  return (
    <div className="App">
      <div className='menuVert'>
      <a className="avatar">
        <img className='avatarImg' src={require('./static/logo.png')} />
      </a>
      <a className='link top'>

        <svg width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 17H16M11.0177 2.764L4.23539 8.03912C3.78202 8.39175 3.55534 8.56806 3.39203 8.78886C3.24737 8.98444 3.1396 9.20478 3.07403 9.43905C3 9.70352 3 9.9907 3 10.5651V17.8C3 18.9201 3 19.4801 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4801 21 18.9201 21 17.8V10.5651C21 9.9907 21 9.70352 20.926 9.43905C20.8604 9.20478 20.7526 8.98444 20.608 8.78886C20.4447 8.56806 20.218 8.39175 19.7646 8.03913L12.9823 2.764C12.631 2.49075 12.4553 2.35412 12.2613 2.3016C12.0902 2.25526 11.9098 2.25526 11.7387 2.3016C11.5447 2.35412 11.369 2.49075 11.0177 2.764Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
      <a className='link'>

        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.00014 14H18.1359C19.1487 14 19.6551 14 20.0582 13.8112C20.4134 13.6448 20.7118 13.3777 20.9163 13.0432C21.1485 12.6633 21.2044 12.16 21.3163 11.1534L21.9013 5.88835C21.9355 5.58088 21.9525 5.42715 21.9031 5.30816C21.8597 5.20366 21.7821 5.11697 21.683 5.06228C21.5702 5 21.4155 5 21.1062 5H4.50014M2 2H3.24844C3.51306 2 3.64537 2 3.74889 2.05032C3.84002 2.09463 3.91554 2.16557 3.96544 2.25376C4.02212 2.35394 4.03037 2.48599 4.04688 2.7501L4.95312 17.2499C4.96963 17.514 4.97788 17.6461 5.03456 17.7462C5.08446 17.8344 5.15998 17.9054 5.25111 17.9497C5.35463 18 5.48694 18 5.75156 18H19M7.5 21.5H7.51M16.5 21.5H16.51M8 21.5C8 21.7761 7.77614 22 7.5 22C7.22386 22 7 21.7761 7 21.5C7 21.2239 7.22386 21 7.5 21C7.77614 21 8 21.2239 8 21.5ZM17 21.5C17 21.7761 16.7761 22 16.5 22C16.2239 22 16 21.7761 16 21.5C16 21.2239 16.2239 21 16.5 21C16.7761 21 17 21.2239 17 21.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
      <a className='link'>

        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 18L19.9999 19.094C19.4695 19.6741 18.7502 20 18.0002 20C17.2501 20 16.5308 19.6741 16.0004 19.094C15.4693 18.5151 14.75 18.1901 14.0002 18.1901C13.2504 18.1901 12.5312 18.5151 12 19.094M3.00003 20H4.67457C5.16376 20 5.40835 20 5.63852 19.9447C5.84259 19.8957 6.03768 19.8149 6.21663 19.7053C6.41846 19.5816 6.59141 19.4086 6.93732 19.0627L19.5001 6.49998C20.3285 5.67156 20.3285 4.32841 19.5001 3.49998C18.6716 2.67156 17.3285 2.67156 16.5001 3.49998L3.93729 16.0627C3.59139 16.4086 3.41843 16.5816 3.29475 16.7834C3.18509 16.9624 3.10428 17.1574 3.05529 17.3615C3.00003 17.5917 3.00003 17.8363 3.00003 18.3255V20Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>

      <a className='link'>

        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 10L14.5657 13.4343C14.3677 13.6323 14.2687 13.7313 14.1545 13.7684C14.0541 13.8011 13.9459 13.8011 13.8455 13.7684C13.7313 13.7313 13.6323 13.6323 13.4343 13.4343L10.5657 10.5657C10.3677 10.3677 10.2687 10.2687 10.1545 10.2316C10.0541 10.1989 9.94591 10.1989 9.84549 10.2316C9.73133 10.2687 9.63232 10.3677 9.43431 10.5657L6 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>

      <a className='link'>

        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M18.7273 14.7273C18.6063 15.0015 18.5702 15.3056 18.6236 15.6005C18.6771 15.8954 18.8177 16.1676 19.0273 16.3818L19.0818 16.4364C19.2509 16.6052 19.385 16.8057 19.4765 17.0265C19.568 17.2472 19.6151 17.4838 19.6151 17.7227C19.6151 17.9617 19.568 18.1983 19.4765 18.419C19.385 18.6397 19.2509 18.8402 19.0818 19.0091C18.913 19.1781 18.7124 19.3122 18.4917 19.4037C18.271 19.4952 18.0344 19.5423 17.7955 19.5423C17.5565 19.5423 17.3199 19.4952 17.0992 19.4037C16.8785 19.3122 16.678 19.1781 16.5091 19.0091L16.4545 18.9545C16.2403 18.745 15.9682 18.6044 15.6733 18.5509C15.3784 18.4974 15.0742 18.5335 14.8 18.6545C14.5311 18.7698 14.3018 18.9611 14.1403 19.205C13.9788 19.4489 13.8921 19.7347 13.8909 20.0273V20.1818C13.8909 20.664 13.6994 21.1265 13.3584 21.4675C13.0174 21.8084 12.5549 22 12.0727 22C11.5905 22 11.1281 21.8084 10.7871 21.4675C10.4461 21.1265 10.2545 20.664 10.2545 20.1818V20.1C10.2475 19.7991 10.1501 19.5073 9.97501 19.2625C9.79991 19.0176 9.55521 18.8312 9.27273 18.7273C8.99853 18.6063 8.69437 18.5702 8.39947 18.6236C8.10456 18.6771 7.83244 18.8177 7.61818 19.0273L7.56364 19.0818C7.39478 19.2509 7.19425 19.385 6.97353 19.4765C6.7528 19.568 6.51621 19.6151 6.27727 19.6151C6.03834 19.6151 5.80174 19.568 5.58102 19.4765C5.36029 19.385 5.15977 19.2509 4.99091 19.0818C4.82186 18.913 4.68775 18.7124 4.59626 18.4917C4.50476 18.271 4.45766 18.0344 4.45766 17.7955C4.45766 17.5565 4.50476 17.3199 4.59626 17.0992C4.68775 16.8785 4.82186 16.678 4.99091 16.5091L5.04545 16.4545C5.25503 16.2403 5.39562 15.9682 5.4491 15.6733C5.50257 15.3784 5.46647 15.0742 5.34545 14.8C5.23022 14.5311 5.03887 14.3018 4.79497 14.1403C4.55107 13.9788 4.26526 13.8921 3.97273 13.8909H3.81818C3.33597 13.8909 2.87351 13.6994 2.53253 13.3584C2.19156 13.0174 2 12.5549 2 12.0727C2 11.5905 2.19156 11.1281 2.53253 10.7871C2.87351 10.4461 3.33597 10.2545 3.81818 10.2545H3.9C4.2009 10.2475 4.49273 10.1501 4.73754 9.97501C4.98236 9.79991 5.16883 9.55521 5.27273 9.27273C5.39374 8.99853 5.42984 8.69437 5.37637 8.39947C5.3229 8.10456 5.18231 7.83244 4.97273 7.61818L4.91818 7.56364C4.74913 7.39478 4.61503 7.19425 4.52353 6.97353C4.43203 6.7528 4.38493 6.51621 4.38493 6.27727C4.38493 6.03834 4.43203 5.80174 4.52353 5.58102C4.61503 5.36029 4.74913 5.15977 4.91818 4.99091C5.08704 4.82186 5.28757 4.68775 5.50829 4.59626C5.72901 4.50476 5.96561 4.45766 6.20455 4.45766C6.44348 4.45766 6.68008 4.50476 6.9008 4.59626C7.12152 4.68775 7.32205 4.82186 7.49091 4.99091L7.54545 5.04545C7.75971 5.25503 8.03183 5.39562 8.32674 5.4491C8.62164 5.50257 8.9258 5.46647 9.2 5.34545H9.27273C9.54161 5.23022 9.77093 5.03887 9.93245 4.79497C10.094 4.55107 10.1807 4.26526 10.1818 3.97273V3.81818C10.1818 3.33597 10.3734 2.87351 10.7144 2.53253C11.0553 2.19156 11.5178 2 12 2C12.4822 2 12.9447 2.19156 13.2856 2.53253C13.6266 2.87351 13.8182 3.33597 13.8182 3.81818V3.9C13.8193 4.19253 13.906 4.47834 14.0676 4.72224C14.2291 4.96614 14.4584 5.15749 14.7273 5.27273C15.0015 5.39374 15.3056 5.42984 15.6005 5.37637C15.8954 5.3229 16.1676 5.18231 16.3818 4.97273L16.4364 4.91818C16.6052 4.74913 16.8057 4.61503 17.0265 4.52353C17.2472 4.43203 17.4838 4.38493 17.7227 4.38493C17.9617 4.38493 18.1983 4.43203 18.419 4.52353C18.6397 4.61503 18.8402 4.74913 19.0091 4.91818C19.1781 5.08704 19.3122 5.28757 19.4037 5.50829C19.4952 5.72901 19.5423 5.96561 19.5423 6.20455C19.5423 6.44348 19.4952 6.68008 19.4037 6.9008C19.3122 7.12152 19.1781 7.32205 19.0091 7.49091L18.9545 7.54545C18.745 7.75971 18.6044 8.03183 18.5509 8.32674C18.4974 8.62164 18.5335 8.9258 18.6545 9.2V9.27273C18.7698 9.54161 18.9611 9.77093 19.205 9.93245C19.4489 10.094 19.7347 10.1807 20.0273 10.1818H20.1818C20.664 10.1818 21.1265 10.3734 21.4675 10.7144C21.8084 11.0553 22 11.5178 22 12C22 12.4822 21.8084 12.9447 21.4675 13.2856C21.1265 13.6266 20.664 13.8182 20.1818 13.8182H20.1C19.8075 13.8193 19.5217 13.906 19.2778 14.0676C19.0339 14.2291 18.8425 14.4584 18.7273 14.7273Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>

      <a className='link bottom' onClick={handleLogout}>
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 8L22 12M22 12L18 16M22 12H9M15 4.20404C13.7252 3.43827 12.2452 3 10.6667 3C5.8802 3 2 7.02944 2 12C2 16.9706 5.8802 21 10.6667 21C12.2452 21 13.7252 20.5617 15 19.796" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>

      
      
      </div>
      <div className='dashboard'>
        {/* <div className='logout'>
          <a onClick={handleLogout} className='logoutCta'>Log out</a>
        </div> */}


        <div className="title">
          <h1>Notifications</h1>
          <img src={require("./static/circle-question-solid.png")} alt="info" height={25} width={25} />
        </div>
        <div className="form">
          <div className="sec-1">
            <h4>Notification Title:</h4>
            <input className="messageTitle" placeholder="Notification Title" value={messageTitle} onChange={(e)=>{setMessageTitle(e.target.value)}}></input>
          </div>

          <div className="sec-1">
            <h4>Your Message:</h4>
            <textarea name="message" id="message" placeholder="Your Message" maxLength={256} value={message} onChange={(e)=>{setMessage(e.target.value)}}></textarea>
          </div>
          <div className="sec-2">
            <div className="title-btn">
              <h4>Select an action:</h4>
              <img src={require("./static/circle-question-solid.png")} alt="info" height={25} width={25} />
            </div>
            <Select className='action' name="select-form" id="select-form" options={options} value={action} onChange={(e)=>{setAction(e.target.value)}}></Select>
          </div>
          <div className="sec-3">
            <h4>Send this message:</h4>
            <div className='check-1'>
              <input type="checkbox" className="now" value="now" onChange={(e)=>{setDatex('now')}}/>
              <span>now</span>
              <input type="checkbox" value="date-specific" onClick={() => { isOpen ? setIsOpen(false) : setIsOpen(true) }} />
              <span>On a specific date</span>
            </div>
            <div className={`specific-date ${isOpen && "open"}`}>
              <DatePicker style={{ marginTop: 10, width: 910 }} />
              <div className='hour'>
                <DatePicker format="HH:mm:ss" caretAs={FaClock} onChange={(e)=>{setDatex(e.target.value)}} />
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
              <div className={`system select-option custom-control custom-checkbox image-checkbox ${iosChecked && "focus"}`} onClick={()=>{setIosChecked(!iosChecked)}}>
                <div className='box-check'>
                  <input type="checkbox" class='hidden custom-control-input' />
                  <img src={ios} alt="info" height={25} width={25} className='ios' />
                </div>
                <span>iOS</span>
              </div>
              <div className={`system select-option custom-control custom-checkbox image-checkbox ${androidChecked && "focus"}`} onClick={()=>{setAndroidChecked(!androidChecked)}}>
                <div className='box-check'>
                  <input type="checkbox" name="asd" id="asd" checked={androidChecked} class='hidden custom-control-input'/>
                  <img src={android} alt="info" height={25} width={25} />
                </div>
                <span>Android</span>
              </div>
              <div className={`system select-option custom-control custom-checkbox image-checkbox ${pwaChecked && "focus"}`} onClick={()=>{setPwaChecked(!pwaChecked)}}>
                <div className='box-check'>
                  <input type="checkbox" name="" id="" class='hidden custom-control-input' />
                  <img src={pwa} alt="info" height={25} width={25} />
                </div>
                <span>Progressive Web App</span>
              </div>

              {/* <div class="select-option pull-left  selected">
                <input type="checkbox" id="target-ios" name="platform-target-ios" value="ios" class="hidden" data-ajax-recipients="" checked="checked">
                  <div class="option-title"><i class="fa fa-apple icon-platform "></i>iOS</div>
              </div> */}
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

          <a className='ctaButton' onClick={sendIt}>Enviar</a>
        </div>
      </div>      

    </div>
  );
  } else{
    return(<p>Signing out. . . </p>)
  }
}

export default Dashboard;
