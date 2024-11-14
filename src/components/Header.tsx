import { useSelector } from 'react-redux';
import Card from './Card';
import './Header.css';
import { GuxButton } from 'genesys-spark-components-react';
import useSdk from '../hooks/useSdk';
import { useEffect, useState } from 'react';


var sec = -1;
function pad(val : number) { return val > 9 ? val : "0" + val; }


type Timer = {
   seconds: string | number;
   minutes: string | number;
   hours: string | number;
}
var timerInterval : any ;
var timerStartIntervalCheck: any;

export default function Header() {
  const conversations = useSelector((state: any) => state.conversations.activeConversations);
  const sdk = useSelector((state: any) => state.sdk.sdk);
  const { endSession } = useSdk();
  const timerInitStatus : Timer = {seconds : '00' , minutes : '00' ,hours : '00'};
  const [timer, setTimer] = useState(timerInitStatus);
  const [headerLabel, setHeaderValue] = useState('Calling ENBD Contact Center..');

  useEffect(() => {
    timerStartIntervalCheck = setInterval(()=>{
      console.log("timer start interval")
      if(!(conversations.length == null || conversations.length == 0)){
        clearInterval(timerStartIntervalCheck);
        if(!timerInterval){
          setHeaderValue("Call is connected.");
          timerInterval = setInterval(() => {
            setTimer({
              seconds: pad(++sec % 60),
              minutes: pad(parseInt(sec / 60, 10) % 60),
              hours: pad(parseInt(sec / 3600, 10))
            });
          }, 1000);
          return () => {
            clearInterval(timerInterval);
          };
        }
      }
    },200);

 
  }, [conversations]);


  return (
    <div className='header-container'>
      <Card className=''>


        <div className='header-content'>
          {/* <img src={ enbdimage }/> */}

          <h2 className='gux-heading-lg-bold'>{headerLabel}</h2>
        </div>
        <div className='header-content'>
          <h2 className='gux-heading-lg-bold'>Duration : </h2>
          <div id="call-timer" className="call-timer header-margin-left">
          {timer.hours}:{timer.minutes}:{timer.seconds}
          </div>
          <GuxButton className="header-margin-left" accent='danger' disabled={conversations.length == null || conversations.length == 0} onClick={() => {
            clearInterval(timerInterval);
            endSession(conversations[0].conversationId);
            setHeaderValue("Call is ended.");
          }}>Decline</GuxButton>

        </div>

      </Card>
    </div>
  )
}
