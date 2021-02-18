function header(rootDir){
    $.ajax({
        url: rootDir + "include/header.html", // ディレクトリー変更
        cache: false,
        async: true,
        dataType: 'html',
        success: function(html){
            html = html.replace(/\{\$root\}/g, rootDir); 
            document.write(html);
        }
    });
}

function footer(rootDir){
    $.ajax({
        url: `${rootDir}include/footer.html`, // ディレクトリー変更
        cache: false,
        async: true,
        dataType: 'html',
        success: function(html){
            html = html.replace(/\{\$root\}/g, rootDir); 
            document.write(html);
        }
    });
}

function head(rootDir){
    $.ajax({
        url: `${rootDir}include/head.html`, // ディレクトリー変更
        cache: false,
        async: true,
        dataType: 'html',
        success: function(html){
            html = html.replace(/\{\$root\}/g, rootDir); 
            document.write(html);
        }
    });
}