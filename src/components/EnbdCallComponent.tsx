import { GuxIcon } from 'genesys-spark-components-react';
import Card from './Card';
import './Dashboard.css';



export default function EnbdCallComponent() {    
    return (
      <div className='header-container'>
        <Card className='header-card'>
          <div className='header-content'>
            <GuxIcon className='header-logo' iconName='custom/genesys' size='large' decorative={true}></GuxIcon>
            <h1 className='gux-heading-lg-bold'>Calling ENBD Contact Center ..</h1>
            <h2 className='gux-heading-lg-bold'>Contact Number: +97144501234</h2>
            <h2 className='gux-heading-lg-bold'>Duration : 00:00:00</h2>


          </div>
          <div className='actions-container'>
           
          </div>
          
        </Card>
      </div>
    )
}
