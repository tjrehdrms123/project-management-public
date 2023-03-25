const ADMIN = {
    branding : {
        companyName: '관리자 대시보드',
        logo: '',
    },
    rootPath: '/admin',
    email: process.env.ADMIN_EMAIL || 'admin@admin.com',
    password: process.env.ADMIN_PASSWORD || '1357',
}

export default ADMIN;