import React from 'react';
import { Card, Typography, Button } from '@material-tailwind/react';

const ContactUs = () => {
  return (
    <div className="flex flex-col items-center justify-center  py-10 md:py-20">
      <Card className="w-full p-6 max-w-lg bg-white rounded-lg shadow-md">
        <Typography className='text-start' variant="h4" color="blue-gray" className="mb-6 text-center">
          Contact Us
        </Typography>
        <div className="flex flex-col gap-4">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89-7.89c.95-.95 2.49-.95 3.44 0L21 8M8 21h8a2 2 0 002-2v-7H6v7a2 2 0 002 2z"
              />
            </svg>
            <div className="ml-4">
              <Typography className='text-start' variant="h6" color="blue-gray">
                Our Address
              </Typography>
              <Typography className='text-start' color="gray">
                123 ProductMania Street, Commerce City, Business Land, 54321
              </Typography>
            </div>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 12c1.657 0 3-.895 3-2s-1.343-2-3-2-3 .895-3 2 1.343 2 3 2zM6 12c1.657 0 3-.895 3-2s-1.343-2-3-2-3 .895-3 2 1.343 2 3 2zM18 14.219V16c0 .53-.158 1.045-.45 1.496C16.973 18.6 15.045 20 12 20s-4.973-1.4-5.55-2.504A2.5 2.5 0 016 16v-1.781C5.236 14.574 4.67 14.005 4 14H3a1 1 0 000 2h1v2c0 2.209 1.791 4 4 4s4-1.791 4-4v-2h1a1 1 0 000-2h-1c-.67 0-1.236.574-2 1.219z"
              />
            </svg>
            <div className="ml-4">
              <Typography className='text-start' variant="h6" color="blue-gray">
                Email Us
              </Typography>
              <Typography className='text-start' color="gray">
                contact@productmania.com
              </Typography>
            </div>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.429 9.571A4.002 4.002 0 017 5c0-2.21-1.79-4-4-4H2C.895 1 .004 1.895 0 3L.001 7c0 1.104.894 2 2 2s2-.896 2-2v-.571c1.206-.206 2.482-.206 3.5 0 1.35.27 2.626.27 3.5 0 1.206-.206 2.482-.206 3.5 0 .895.27 1.556 1.242 1.556 2.25V14c0 2.21-1.79 4-4 4H12c-1.106 0-2-.896-2-2v-.571a4.002 4.002 0 01-1.571 1.571C8.26 16.244 8.136 16 8 16s-.26.244-.429.429A4.002 4.002 0 016 15.571V15c0-1.106-.896-2-2-2H3c-1.106 0-2 .896-2 2v.571c0 .75-.214 1.477-.571 2.143-.357.666-.835 1.303-1.429 1.857C1.48 20.384 2.207 21 3 21h18c.794 0 1.52-.616 1.571-1.429-.594-.554-1.072-1.191-1.429-1.857C23.786 16.477 23.571 15.75 23.571 15V15c0-.75.214-1.477.571-2.143C24.785 11.835 25.264 11.198 25.857 10.143c.55-.914 1.143-1.77 1.571-2.857A4.002 4.002 0 0134 5.857V3c0-1.106-.895-2-2-2H27c-1.106 0-2 .896-2 2v.571c-1.018-.27-2.294-.27-3.5 0-.895.27-1.556 1.242-1.556 2.25V14c0 2.21-1.79 4-4 4H6c-2.21 0-4-1.79-4-4V9c0-2.209 1.791-4 4-4 .744 0 1.494.115 2.214.318C6.18 6.215 6 7.394 6 9.571z"
              />
            </svg>
            <div className="ml-4">
              <Typography className='text-start' variant="h6" color="blue-gray">
                Call Us
              </Typography>
              <Typography className='text-start' color="gray">
                +123 456 7890
              </Typography>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center">
          <Button
            variant="gradient"
            color="blue"
            className="bg-blue-600 hover:bg-blue-700 focus:ring focus:ring-blue-300"
            size="lg"
          >
            Send Message
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ContactUs;
