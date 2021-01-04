import React  from  'react';
import styles from './Titles.module.css';
 const titles = (props)=>{
            let title=null;
        /*    let text=null;
            let subtitle=null;
            let titleChart=null;
            let textChartSubtitle=null;
            */
            if(props.title){
                title  = <h1 className={styles.TitleTextCenter}> {props.title} </h1>;
                return title;
            }
            /*
             if(props.text){
                text  = <h3 className={styles.TextAlignCenter}> {props.text} </h3>;
                return text;
            }
             if(props.subtitle){
                subtitle  =  <div className={styles.SubtitleAlignLeft}> {props.subtitle} </div>;
                return subtitle;
            }
            if(props.titleChart){
                console.log('qaq')
                titleChart  = <h5 className={styles.textChart} > {props.titleChart} </h5> ;
                return titleChart;
            }
            if(props.textChartSubtitle){
                textChartSubtitle=<p className={styles.textChartSubtitlet} > {props.textChartSubtitle} </p> ;
                return textChartSubtitle
            }
            */
            return ( 
                <>
      
                {title}
             
        
       
                </>
            );
      
}
export default titles;