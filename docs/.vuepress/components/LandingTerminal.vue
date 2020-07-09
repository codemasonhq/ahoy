<template>
<div class="terminal mt-5">
    <div class="bar">
        <div></div>
        <div></div>
        <div></div>
    </div>
    <pre class="term-window"><code class="term-content"><span class="line-comment"># Install Ahoy CLI</span>
<span class="prompt">$</span> <span class="line-input">npm install -g @codemason/ahoy</span>

<span class="line-comment"># Install the Docker files</span>
<span class="prompt">$</span> <span class="line-input">ahoy install php</span>
Crafting <span class="line-green">php</span> application with <span class="line-green">php, mariadb</span>
<span class="line-gray">  Wrote .dockerignore</span>
<span class="line-gray">  Wrote Dockerfile</span>
<span class="line-gray">  Wrote docker-compose.yml</span>

<span class="line-comment"># Start and enjoy!</span>
<span class="prompt">$</span> <span class="line-input">docker-compose up -d</span>
Starting project_web_1 ... <span class="line-green">done</span>

<span class="line-comment"># Secure with local SSL (optional)</span>
<span class="prompt">$</span> <span class="line-input">ahoy secure</span>
Securing <span class="line-green">https://ahoyworld.local</span> to <span class="line-yellow">web</span> with a fresh TLS certificate.
<span class="line-gray">  Creating trusted certificate for domain</span>
<span class="line-gray">  Adding domain to hosts file</span>
<span class="line-gray">  Restarting docker compose services</span></code></pre>
</div>
</template>
