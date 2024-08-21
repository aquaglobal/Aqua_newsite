/** @type {import('next').NextConfig} */
const nextConfig={
    env: {
        BACKEND_URL: process.env.BACKEND_URL,
        GOOGLEMAP_API: process.env.GOOGLEMAP_API
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'myaquawebbucker.s3.amazonaws.com',
                pathname: '**',
            },
        ]
    },
    // webpack(config) {
    //     config.module.rules.push({
    //         test: /\.svg$/,
    //         use: [{ loader: "@svgr/webpack", options: { icon: true } }],
    //     });
    //     return config;
    // },
};

export default nextConfig;
