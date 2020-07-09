<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark shadow-sm pt-4">
        <div class="container">
            <a class="navbar-brand" href="/">
                <svg height="45" viewBox="-19 0 414 414.456" xmlns="http://www.w3.org/2000/svg"><path d="M238.184 407.629h-86.68c-49.613 0-89.836-40.219-89.836-89.836V189.828H328.02v127.965c0 49.617-40.223 89.836-89.836 89.836zm0 0" fill="#0e65e5"/><path d="M238.184 414.457h-86.676c-53.301 0-96.668-43.363-96.668-96.664V189.828A6.828 6.828 0 0161.668 183H328.02a6.828 6.828 0 016.828 6.828v127.965c0 53.3-43.368 96.664-96.664 96.664zM68.496 196.652v121.141c0 45.773 37.238 83.012 83.012 83.012h86.676c45.77 0 83.011-37.239 83.011-83.012v-121.14zm0 0" fill="#0e65e5"/><path d="M238.184 387.148h-86.68c-49.613 0-89.836-40.218-89.836-89.836V169.349H328.02v127.964c0 49.618-40.223 89.836-89.836 89.836zm0 0" fill="#288eea"/><path d="M238.184 393.977h-86.676c-53.301 0-96.668-43.364-96.668-96.664V169.347a6.824 6.824 0 016.828-6.825H328.02a6.824 6.824 0 016.828 6.825v127.964c0 53.301-43.368 96.665-96.664 96.665zM68.496 176.172v121.14c0 45.774 37.238 83.012 83.012 83.012h86.676c45.77 0 83.011-37.238 83.011-83.012v-121.14zm0 0" fill="#0e65e5"/><path d="M265.71 318.883H124.638c-23.04 0-41.719-18.676-41.719-41.719V155.043H307.43v122.121c0 23.043-18.68 41.719-41.72 41.719zm0 0" fill="#d7e9ff"/><path d="M265.707 325.71h-141.07c-26.77 0-48.54-21.776-48.54-48.542V155.043c0-3.77 3.051-6.828 6.825-6.828H307.43a6.824 6.824 0 016.824 6.828v122.125c0 26.766-21.781 48.543-48.547 48.543zM89.747 161.872v115.297c0 19.238 15.655 34.887 34.886 34.887h141.074c19.238 0 34.895-15.649 34.895-34.887V161.871zm0 0" fill="#0e65e5"/><path d="M339.156 271.098H328.02v-81.922h11.136c8.871 0 16.059 7.191 16.059 16.058v49.805c0 8.867-7.192 16.059-16.059 16.059zm0 0" fill="#d7e9ff"/><path d="M339.156 277.922h-11.133a6.824 6.824 0 01-6.828-6.824v-81.922a6.824 6.824 0 016.828-6.824h11.133c12.621 0 22.887 10.265 22.887 22.882v49.801c0 12.621-10.27 22.887-22.887 22.887zm-4.308-13.652h4.304c5.094 0 9.235-4.145 9.235-9.235v-49.8c0-5.087-4.14-9.231-9.235-9.231h-4.304zm0 0" fill="#0e65e5"/><path d="M328.02 167.91c-96.504 50.547-185.29 50.547-266.352 0v-60.652H328.02zm0 0" fill="#94c1ff"/><path d="M189.047 212.531c-45.711 0-89.48-12.941-130.992-38.828a6.826 6.826 0 01-3.215-5.793v-60.652a6.825 6.825 0 016.828-6.828H328.02a6.825 6.825 0 016.828 6.828v60.652a6.816 6.816 0 01-3.66 6.047c-49.094 25.715-96.586 38.574-142.141 38.574zM68.497 164.09c76.632 46.344 161.593 46.23 252.698-.332v-49.676H68.496zm259.523 3.82h.066zm0 0" fill="#0e65e5"/><path d="M61.668 271.098h-11.25c-8.867 0-16.055-7.192-16.055-16.059v-49.805c0-8.87 7.188-16.058 16.055-16.058h11.25zm0 0" fill="#d7e9ff"/><path d="M61.668 277.922H50.422c-12.621 0-22.887-10.266-22.887-22.887v-49.8c0-12.618 10.266-22.883 22.887-22.883h11.246a6.824 6.824 0 016.828 6.824v81.922a6.824 6.824 0 01-6.828 6.824zm-11.246-81.918c-5.094 0-9.234 4.144-9.234 9.23v49.801c0 5.09 4.14 9.235 9.234 9.235h4.418v-68.266zm0 0" fill="#0e65e5"/><path d="M165.121 11.68c-26.457 11.797-74.094 28.543-133.25 29.718-13.805.278-24.816 11.649-24.816 25.454 0 6.035 2.117 11.878 6.03 16.468 16.36 19.184 63.52 69.637 110.685 74.356h128.386c47.16-4.715 94.32-55.172 110.68-74.356 3.914-4.59 6.031-10.433 6.031-16.468 0-13.805-11.012-25.176-24.816-25.454-59.156-1.175-106.79-17.921-133.25-29.718a56.064 56.064 0 00-45.68 0zm0 0" fill="#fff"/><path d="M187.96 164.5h-64.19c-49.79-4.945-97.602-55.32-115.875-76.75C2.957 81.965.227 74.54.227 66.855c0-17.457 14.132-31.933 31.507-32.28C88.207 33.452 133.93 18.112 162.34 5.444a62.988 62.988 0 0151.242 0c28.41 12.672 74.133 28.008 130.606 29.13 17.375.347 31.507 14.823 31.507 32.28 0 7.688-2.726 15.11-7.668 20.899-18.273 21.426-66.086 71.8-115.191 76.715zM167.903 17.91C138.344 31.098 90.762 47.06 32 48.227c-9.992.199-18.117 8.554-18.117 18.628 0 4.442 1.558 8.711 4.398 12.032 13.426 15.746 60.754 67.453 106.168 71.996l127.707-.035c44.73-4.508 92.059-56.215 105.485-71.957 2.84-3.32 4.402-7.594 4.402-12.036 0-10.074-8.129-18.43-18.121-18.628-58.762-1.168-106.34-17.13-135.899-30.317a49.366 49.366 0 00-40.12 0zm0 0M246.32 234.531a6.824 6.824 0 01-6.824-6.828V204.36a6.82 6.82 0 016.824-6.824 6.824 6.824 0 016.828 6.824v23.344a6.828 6.828 0 01-6.828 6.828zm0 0M150.746 234.531a6.824 6.824 0 01-6.824-6.828V204.36a6.82 6.82 0 016.824-6.824 6.824 6.824 0 016.828 6.824v23.344a6.828 6.828 0 01-6.828 6.828zm0 0" fill="#0e65e5"/><path d="M209.55 281.016h-31.222c-7.226 0-14.336 2.964-18.793 8.656-10.242 13.086-31.582 13.086-31.582 13.086v10.87c41.902 27.18 65.844 0 65.844 0s23.945 27.18 65.848 0v-10.87s-21.582 0-31.758-13.313c-4.282-5.601-11.29-8.43-18.336-8.43zm0 0" fill="#94c1ff"/><g fill="#0e65e5"><path d="M224.184 332.465a51.22 51.22 0 01-30.391-9.887c-10.098 7.418-34.66 19.418-69.55-3.223a6.82 6.82 0 01-3.114-5.726v-10.867a6.825 6.825 0 016.828-6.828c.164 0 18.176-.215 26.2-10.47 5.527-7.062 14.566-11.273 24.171-11.273h31.223c9.558 0 18.437 4.153 23.758 11.114 7.96 10.414 26.168 10.629 26.351 10.629 3.754.023 6.809 3.07 6.809 6.828v10.87a6.833 6.833 0 01-3.114 5.727c-15.109 9.797-28.28 13.106-39.171 13.106zm-30.391-25.66c1.96 0 3.828.84 5.121 2.312.781.852 19.715 21.004 53.902.719v-.8c-8.28-1.145-22.109-4.653-30.355-15.442-2.754-3.602-7.578-5.75-12.91-5.75h-31.223c-5.445 0-10.46 2.254-13.418 6.031-8.262 10.566-21.922 14.027-30.125 15.16v.797c34.55 20.508 53.692-.492 53.89-.715a6.81 6.81 0 015.118-2.312zm0 0M191.375 127.734a6.824 6.824 0 01-6.828-6.824V38.988c0-3.77 3.055-6.824 6.828-6.824s6.828 3.055 6.828 6.824v81.922a6.824 6.824 0 01-6.828 6.824zm0 0"/><path d="M218.68 66.297h-54.614c-3.773 0-6.824-3.059-6.824-6.828s3.051-6.824 6.824-6.824h54.614a6.827 6.827 0 110 13.652zm0 0M191.375 127.734c-22.586 0-40.96-18.37-40.96-40.957a6.828 6.828 0 016.827-6.828 6.824 6.824 0 016.824 6.828c0 15.055 12.25 27.305 27.309 27.305s27.305-12.25 27.305-27.305a6.828 6.828 0 016.828-6.828 6.828 6.828 0 016.828 6.828c0 22.586-18.375 40.957-40.961 40.957zm0 0"/></g><path d="M245.988 393.977a6.828 6.828 0 01-6.828-6.829v-27.304a6.828 6.828 0 016.828-6.828 6.828 6.828 0 016.828 6.828v27.304a6.828 6.828 0 01-6.828 6.829zm0 0" fill="#fff"/><path d="M259.64 380.324h-27.304a6.828 6.828 0 01-6.828-6.828 6.828 6.828 0 016.828-6.828h27.305a6.828 6.828 0 016.828 6.828 6.828 6.828 0 01-6.828 6.828zm0 0M225.508 189.176a6.824 6.824 0 01-6.828-6.824 6.825 6.825 0 016.828-6.829c38.445 0 77.742-25.902 78.133-26.16a6.815 6.815 0 019.468 1.895 6.819 6.819 0 01-1.894 9.465c-1.742 1.164-43.168 28.453-85.707 28.453zm0 0" fill="#fff"/></svg>
                Ahoy
                <div class="beta-flag">
                    <span class="badge badge-dark">beta</span>
                </div>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!-- Left Side Of Navbar -->
                <ul class="navbar-nav mr-auto">

                </ul>

                <!-- Right Side Of Navbar -->
                <ul class="navbar-nav ml-auto align-items-center">
                    <li class="nav-item">
                        <a class="nav-link" href="/introduction">Docs</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://github.com/codemasonhq/ahoy-cli">GitHub</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://twitter.com/benmagg">Twitter</a>
                    </li>
                    <li v-if="showSponsor" class="nav-item text-center ml-4">
                        <a class="nav-link" href="https://codemason.io">
                            <small style="letter-spacing: 0.02rem;">Brought to you by</small>
                            <div class="text-white" style="margin-top: -5px;">Codemason</div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <main class="py-4">
        <div class="container">
            <!-- Hero -->
            <div class="row hero justify-content-center align-items-center pt-5 pb-3">
                <div class="col-md-8 py-4 text-center">
                    <h1>{{ data.heroText }}</h1>
                    <p>{{ data.tagline }}</p>

                    <LandingTerminal/>
                </div>
            </div>

            <!-- Supported Languages & Frameworks -->
            <div class="d-none  row mb-5 justify-content-center">
                <div class="col-md-7 text-center">
                    <div class="card card-lang">
                        <div class="card-body">
                            PHP
                        </div>
                    </div>
                    <div class="card card-lang">
                        <div class="card-body">
                            Laravel
                        </div>
                    </div>
                    <div class="card card-lang">
                        <div class="card-body">
                            Static Sites
                        </div>
                    </div>
                    <div class="card card-lang">
                        <div class="card-body">
                            Node.js
                        </div>
                    </div>
                    <div class="card card-lang">
                        <div class="card-body">
                            Rails
                        </div>
                    </div>
                    <div class="card card-lang">
                        <div class="card-body">
                            Bedrock for Wordpress
                        </div>
                    </div>
                </div>
            </div>

            <!-- How it works -->
            <div class="row">
                <div class="col-md-12 text-center">
                    <h2 class="py-4">{{ data.highlightsText }}</h2>
                </div>
            </div>

            <div class="row how-it-works justify-content-center">
                <div v-for="highlight in data.highlights" class="col-md-4">
                    <div class="card text-white mb-3">
                        <div class="card-body text-center">
                            <div class="icon d-flex justify-content-center">
                                <div class="align-self-center"><i :class="highlight.icon"></i></div>
                            </div>
                            <h5 class="card-title">{{ highlight.title }}</h5>
                            <p>{{ highlight.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row how-it-works-description justify-content-center mt-5">
                <div class="col-md-6">
                    <Content class="theme-default-content custom" />
                    <div class="text-center mt-4">
                        <button class="btn btn-secondary align-self-center">{{ data.docsText }}</button>
                    </div>
                </div>
            </div>

            <!-- Features -->
            <div class="row mt-4">
                <div class="col-md-12 text-center">
                    <h2 class="py-4">{{ data.featuresTitle }}</h2>
                </div>
            </div>

            <div class="row features">
                <div v-for="feature in data.features" class="col-md-6">
                    <div class="feature">
                        <div class="icon"><i :class="feature.icon"></i></div>
                        <h5>{{ feature.title }}</h5>
                        <p class="mb-0">{{ feature.description }}</p>
                    </div>
                </div>
            </div>

            <!-- Sponsor -->
            <div v-if="showSponsor">
                <SponsorBox />
            </div>


            <!-- Footer -->
            <div class="row mt-5">
                <div class="col-md-12 text-center">
                    {{ data.footer }}
                </div>
            </div>
        </div>
    </main>
    </div>
</template>

<script>
export default {

    computed: {
        data () {
            return this.$page.frontmatter
        },

        showSponsor () {
          return this.$site.themeConfig.showSponsor || false
        },
    }
}
</script>

<style src="../styles/app.scss" lang="scss"></style>
