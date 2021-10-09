new Vue({
    el: '#record',
    data: {
        hamburger: false,
        url_twitter: 'https://twitter.com/aizu_astro',
        url_instagram: 'https://instagram.com/aizu_astro',
        url_kibousya: 'https://docs.google.com/forms/d/1yEKQDrH2Rg3jT3xBfc6GRevokw228_ZYlrcY2LzV1sw/edit',
        mail_address: 'mailto:s1280167@u-aizu.ac.jp',

    },
    methods: {
        onHamburger: function() {
            hamburger = !hamburger;
        },
    }
})