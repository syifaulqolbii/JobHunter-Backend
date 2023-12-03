'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */

        await queryInterface.bulkInsert('Jobs', [
            {
                users_id: 2,
                job_name: 'Frontend Developer',
                type: 'fulltime',
                category: 'IT',
                requirement: 'S1',
                description: 'Kami sedang mencari seorang Frontend Developer yang berbakat dan berpengalaman untuk bergabung dengan tim teknis kami. Sebagai Frontend Developer, Anda akan bertanggung jawab untuk merancang, mengembangkan, dan memelihara antarmuka pengguna (UI) dari aplikasi web kami. Anda akan bekerja sama dengan tim pengembangan dan desain untuk memastikan pengalaman pengguna yang responsif, menarik, dan mudah digunakan',
                required_skill: 'HTML, CSS, Javascript',
                salary: 'Rp. 10.000.000',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                users_id: 2,
                job_name: 'Backend Developer',
                type: 'fulltime',
                category: 'IT',
                requirement: 'S1',
                description: 'Kami mencari Backend Developer yang berkomitmen untuk bergabung dengan tim teknis kami. Sebagai Backend Developer, Anda akan berperan penting dalam merancang, mengembangkan, dan memelihara server, database, dan logika bisnis dari aplikasi web kami. Kami mencari seseorang yang memiliki keahlian teknis tinggi, pemahaman mendalam tentang pengembangan backend, dan kemampuan untuk memberikan solusi yang efisien dan andal.',
                required_skill: 'PHP, NodeJS, Python',
                salary: 'Rp. 10.000.000',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                users_id: 2,
                job_name: 'UI/UX Designer',
                type: 'fulltime',
                category: 'IT',
                requirement: 'S1',
                description: 'Kami membuka kesempatan bagi seorang UI/UX Developer yang kreatif dan berpengalaman untuk bergabung dengan tim desain kami. Sebagai UI/UX Developer, Anda akan menjadi arsitek pengalaman pengguna, merancang antarmuka yang menarik dan fungsional. Kami mencari seseorang yang memiliki keahlian desain grafis, memahami prinsip-prinsip UX, dan dapat berkolaborasi dengan tim pengembangan untuk menghasilkan solusi yang luar biasa.',
                required_skill: 'Adobe XD, Figma, Photoshop',
                salary: 'Rp. 10.000.000',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                users_id: 2,
                job_name: 'Frontend Developer',
                type: 'fulltime',
                category: 'IT',
                requirement: 'S1',
                description: 'Kami sedang mencari seorang Frontend Developer yang berbakat dan berpengalaman untuk bergabung dengan tim teknis kami. Sebagai Frontend Developer, Anda akan bertanggung jawab untuk merancang, mengembangkan, dan memelihara antarmuka pengguna (UI) dari aplikasi web kami. Anda akan bekerja sama dengan tim pengembangan dan desain untuk memastikan pengalaman pengguna yang responsif, menarik, dan mudah digunakan',
                required_skill: 'HTML, CSS, Javascript',
                salary: 'Rp. 10.000.000',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                users_id: 2,
                job_name: 'Backend Developer',
                type: 'fulltime',
                category: 'IT',
                requirement: 'S1',
                description: 'Kami mencari Backend Developer yang berkomitmen untuk bergabung dengan tim teknis kami. Sebagai Backend Developer, Anda akan berperan penting dalam merancang, mengembangkan, dan memelihara server, database, dan logika bisnis dari aplikasi web kami. Kami mencari seseorang yang memiliki keahlian teknis tinggi, pemahaman mendalam tentang pengembangan backend, dan kemampuan untuk memberikan solusi yang efisien dan andal.',
                required_skill: 'PHP, NodeJS, Python',
                salary: 'Rp. 10.000.000',
                createdAt: new Date(),
                updatedAt: new Date()
            }])
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};
