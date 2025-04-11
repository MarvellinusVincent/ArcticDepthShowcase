import React from 'react';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 481.882 481.882" fill="#5E81AC" stroke="#5E81AC" strokeWidth="1.5">
          <path d="M216.402,170.984L113.714,472.351c-1.208,3.545,0.628,7.406,4.14,8.708c3.51,1.301,7.419-0.43,8.814-3.905L245.27,181.689L216.402,170.984z"/>
          <path d="M406.16,76.109c-100.963-100.963-264.655-100.963-365.618,0c-108.286,108.286,23.628,117.615,123.86,199.287l42.434-124.538l2.02,0.749c-0.931-5.76-0.448-11.612,1.559-17.026c2.888-7.794,8.754-13.123,14.967-18.766l3.427-3.138c5.006-4.661,10.907-10.638,16.717-19.586c3.309-5.1,8.478-8.026,14.175-8.026h6.842l5.154,5.32c2.561,2.797,8.558,9.348,5.005,49.453c-1.001,11.344-2.284,15.795-3.165,18.156c-2,5.404-5.45,10.158-9.916,13.923l2.019,0.749l-58.43,145.561c81.602,99.964,92.515,229.935,198.949,123.501C507.123,340.765,507.123,177.072,406.16,76.109z M88.624,160.018c-22.1,0-40.016-17.916-40.016-40.017s17.915-40.017,40.016-40.017c22.101,0,40.017,17.916,40.017,40.017S110.725,160.018,88.624,160.018z M200.927,113.332c-22.101,0-40.017-17.916-40.017-40.017c0-22.1,17.915-40.016,40.017-40.016c22.1,0,40.016,17.916,40.016,40.016C240.943,95.416,223.026,113.332,200.927,113.332z M399.341,151.736c22.1,0,40.017,17.916,40.017,40.016c0,22.101-17.916,40.017-40.017,40.017c-22.1,0-40.017-17.916-40.017-40.017C359.325,169.652,377.242,151.736,399.341,151.736z M285.128,97.42c0-22.1,17.916-40.017,40.017-40.017c22.1,0,40.017,17.916,40.017,40.017c0,22.1-17.917,40.017-40.017,40.017C303.044,137.437,285.128,119.52,285.128,97.42z M341.818,441.855c-22.101,0-40.017-17.915-40.017-40.016c0-22.101,17.915-40.017,40.017-40.017c22.1,0,40.016,17.916,40.016,40.017C381.834,423.939,363.918,441.855,341.818,441.855z M399.341,351.818c-22.1,0-40.017-17.915-40.017-40.017c0-22.1,17.917-40.016,40.017-40.016c22.1,0,40.017,17.915,40.017,40.016C439.358,333.903,421.441,351.818,399.341,351.818z"/>
          <path d="M258.565,101.553c-6.695,10.319-13.419,17.151-19.164,22.501c-6.988,6.508-12.5,10.778-14.409,15.928c-1.234,3.329-1.382,6.779-0.702,10.013l28.681,10.635c2.628-2.009,4.763-4.721,5.997-8.051c0.917-2.473,1.694-7.8,2.253-14.109C262.779,120.846,262.577,95.371,258.565,101.553z"/>
        </svg>
      ),
      title: 'Deep Blue Palette',
      description: 'Eye-strain reducing colors',
      color: '#5E81AC'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 64 64" fill="#3B8EA5" stroke="#3B8EA5" strokeWidth="1.5">
          <path d="M62.242,53.757L51.578,43.093C54.373,38.736,56,33.56,56,28C56,12.536,43.464,0,28,0S0,12.536,0,28s12.536,28,28,28c5.56,0,10.736-1.627,15.093-4.422l10.664,10.664c2.344,2.344,6.142,2.344,8.485,0S64.586,56.101,62.242,53.757z M28,54C13.641,54,2,42.359,2,28S13.641,2,28,2s26,11.641,26,26S42.359,54,28,54z M60.828,60.828c-1.562,1.562-4.095,1.562-5.656,0L44.769,50.425c2.145-1.606,4.051-3.513,5.657-5.656l10.402,10.402C62.391,56.732,62.391,59.266,60.828,60.828z"/>
          <path d="M28,4C14.745,4,4,14.745,4,28s10.745,24,24,24s24-10.745,24-24S41.255,4,28,4z M28,50C15.85,50,6,40.15,6,28S15.85,6,28,6s22,9.85,22,22S40.15,50,28,50z"/>
          <path d="M28,11c-0.553,0-1,0.447-1,1s0.447,1,1,1c8.284,0,15,6.716,15,15c0,0.553,0.447,1,1,1s1-0.447,1-1C45,18.611,37.389,11,28,11z"/>
        </svg>
      ),
      title: 'High Contrast',
      description: 'Clear element distinction',
      color: '#3B8EA5'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#40E0D0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      ),
      title: 'Modern Aesthetic',
      description: 'Clean futuristic design',
      color: '#40E0D0'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5E81AC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: 'Language Support',
      description: 'JS/TS/Python/HTML/CSS',
      color: '#5E81AC'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#40E0D0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Terminal Colors',
      description: 'Custom ANSI scheme',
      color: '#40E0D0'
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-12">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center group"
            >
              <div className="w-12 h-12 p-2 mb-4 rounded-lg bg-[#1A202C] border border-[#2E3440] flex items-center justify-center">
                {feature.icon}
              </div>
              <div className="text-center max-w-[180px]">
                <h3 className="text-sm font-mono font-medium mb-1" style={{ color: feature.color }}>
                  {feature.title}
                </h3>
                <p className="text-xs text-[#E0E7EC]/70 font-mono">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;