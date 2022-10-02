import Head from 'next/head'
import formStyles from '../styles/Form.module.css'

export default function Home() {
  return (
    <>
    
    <div>
      <Head>
        <title>Damage Reporting</title>
      </Head>
      <h1>Damage Reporting Form</h1>
    </div>
    
     <form className={formStyles.container}>

       <div className={formStyles.card}>
           <label>Description of Inciddent</label>
           <input 
                type='text' 
               placeholder='Add Description'
               
               />
         </div>

        <div className={formStyles.card} >
            <label>Submitted by</label>
            <input 
                  type='text' 
                  placeholder='Add your name and unit no.'
                  
                  />
          </div>

         <div>
              <label>Tick the box to notify building manager</label>
                <input type='checkbox'
                      
                       
                        />
           </div>

           <input type='submit' value='Submit your application'/>
     </form>
    </>
 )
}
