/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.locknlock.com',
                pathname: '**'
            },
            {
                protocol: 'https',
                hostname: 'scbd.com',
                pathname: '**'
            },
            {
                protocol: 'https',
                hostname: 'randomuser.me',
                pathname: '/api/**',
                port:''
            },
        ]
    }
};

export default nextConfig;
