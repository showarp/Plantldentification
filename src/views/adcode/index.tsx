import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface IPData {
  ip: string;
}

interface ADCodeData {
  adcode: string;
}

const MyComponent: React.FC = () => {
  const [ipAddress, setIPAddress] = useState<string | null>(null);
  const [adcode, setADCode] = useState<string | null>(null);

  useEffect(() => {
    const fetchIPAddress = async () => {
      try {
        const response = await axios.get<IPData>('https://api.ipify.org?format=json');
        const ip = response.data.ip;
        setIPAddress(ip);
      } catch (error) {
        console.error('Error retrieving IP address:', error);
        setIPAddress(null);
      }
    };

    fetchIPAddress();
  }, []);

  useEffect(() => {
    const fetchADCode = async () => {
      if (ipAddress) {
        const apiKey = '733325870f34c4c2b44011d7fd84262d';
        const url = `https://restapi.amap.com/v3/ip?ip=${ipAddress}&key=${apiKey}`;

        try {
          const response = await axios.get<ADCodeData>(url);
          const code = response.data.adcode;
          setADCode(code);
        } catch (error) {
          console.error('Error retrieving AD code:', error);
          setADCode(null);
        }
      }
    };

    fetchADCode();
  }, [ipAddress]);
  
  
  
  return (
    
    <div>
      <p>IP Address: {ipAddress}</p>
      <p>AD Code: {adcode}</p>
    </div>
  );
};

export default MyComponent;