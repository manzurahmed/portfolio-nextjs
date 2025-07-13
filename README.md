# Project Setup

YouTube Link: [https://www.youtube.com/watch?v=dImgZ_AH7uA&t=81s]
Demo Link: [https://portfolio-nextjs-one-virid.vercel.app/]

Completion: 2:16:04

```bash
npx create-next-app@latest .
npm install @tailwindcss/postcss postcss
npm install motion (former, framer-motion)
npm i react-icons
npm i react-countup

// ShadCn
npx shadcn@latest init
npx shadcn@latest add input button scroll-area select sheet tabs textarea tooltip

// Image slider
npm i swiper
```

# Docker Desktop

```bash
// Build the image:
docker build -t my-portfolio .
// Run the container:
docker run -p 3000:3000 my-portfolio
```

## Copy Docker image

Docker images do not reside as regular files in a folder on your PC. They are stored internally by Docker in its own storage system.

To copy (export) your built image, you need to save it to a file using the docker save command. For example:

```bash
docker save -o my-portfolio.tar my-portfolio
```

This will create a file named my-portfolio.tar in your current directory.
You can then copy this .tar file to your pen drive or any folder you want.
