module.exports = {
    name: "get_url_2000",
    script: "./src/index.ts",
    interpreter: 'bun',
    exec_mode: 'fork', // cluster, fork
    instances: 1,
    watch: false
};