// postcss config with plugins used

const
    autoprefixer=require('autoprefixer'),
    postcss_import=require("postcss-import"),
    postcss_nested=require("postcss-nested"),
    postcss_extend=require("postcss-extend"),
    postcss_calc=require("postcss-calc"),
    postcss_custom_properties=require("postcss-custom-properties"),
    postcss_custom_media=require("postcss-custom-media"),
    postcss_color_function=require("postcss-color-function");

module.exports = {
    plugins:[
        autoprefixer({
            browsers:['>5%']
        }),
        postcss_import(),
        postcss_nested(),
        postcss_extend(),
        postcss_calc(),
        postcss_custom_properties({"preserve": true}),
        postcss_custom_media(),
        postcss_color_function()
    ]
}
