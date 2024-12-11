declare module 'react-slick' {
    import React from 'react';
  
    interface Settings {
      dots?: boolean;
      infinite?: boolean;
      speed?: number;
      slidesToShow?: number;
      slidesToScroll?: number;
      autoplay?: boolean;
      autoplaySpeed?: number;
      arrows?: boolean;
      rows?: number;
      responsive?: Array<{
        breakpoint: number;
        settings: Settings;
      }>;
      [key: string]: any; 
    }
  
    export default class Slider extends React.Component<Settings> {}
  }
  