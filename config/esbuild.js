import esbuild from 'esbuild'

esbuild.build({
    entryPoints:['src/sw.js', 'src/scripts/scrapper.js', 'src/scripts/popup.js',
    'src/scripts/scrapperCandidates.js' ],
    watch: true,
    bundle: true,
    outdir: 'dist',
    minify: false,
    allowOverwrite: true
})
    .then(response=>console.log(JSON.stringify(response)))
    .catch(err=> console.log(err))