function FindProxyForURL(url, host)
{
    // local network goes "DIRECT"
    // if (isInNet(host, "192.168.1.0", "255.255.255.0") || 
    //     isInNet(host, "10.10.1.0", "255.255.255.0") || 
    //     isInNet(host, "172.16.0.0", "255.240.0.0") || 
    //     isInNet(host, "127.0.0.0", "255.255.255.0") || 
    //     shExpMatch(host, "*.local"))
    // {
    //     return "DIRECT";
    // }

    var proxy;
    if (myIpAddress() == "10.10.1.52")
    {
        proxy = "SOCKS5 127.0.0.1:9050; SOCKS 127.0.0.1:9050";
    }
    else
    {
        proxy = "SOCKS5 10.10.1.52:9100; SOCKS 10.10.1.52:9100";
    }

    if (shExpMatch(host, "check.torproject.org"))
    {
        return proxy + "; DIRECT";
    }
    
    if (shExpMatch(host, "*.nytimes.com")
     || shExpMatch(url, "http://*.nyt.com/*")
     || shExpMatch(host, "*.reuters.com")
     || shExpMatch(host, "*.reutersmedia.com")
     || shExpMatch(host, "*.bbci.co.uk")
     || shExpMatch(host, "time.com")
     || shExpMatch(host, "*.economist.com")
     || shExpMatch(host, "*.dw.com")
     || shExpMatch(host, "theinitium.com")
     || shExpMatch(host, "*.scmp.com")
     || shExpMatch(host, "*.nextmedia.com")
     || shExpMatch(host, "www.alliance.org.hk")
     || shExpMatch(host, "www.64memo.com")
     || shExpMatch(host, "www.tiananmenmother.org")
     || shExpMatch(host, "chinadigitaltimes.net")
     || shExpMatch(host, "evchk.wikia.com")
     || shExpMatch(host, "chinapower.csis.org")
     || shExpMatch(url, "http://*.tumblr.com/*")
     || shExpMatch(host, "static.tumblr.com")
     || shExpMatch(host, "resources.blogblog.com")
     || shExpMatch(host, "*.jpl.nasa.gov")
     || shExpMatch(host, "*.dropbox.com")
     || shExpMatch(host, "www.putty.org")
     || shExpMatch(host, "*.imgbox.com")
     || shExpMatch(host, "www.malwaretech.com")
     || shExpMatch(host, "*.southwest.com")
     || shExpMatch(host, "twitter.com")
     || shExpMatch(host, "*.twitter.com")
     || shExpMatch(host, "syndication.twimg.com")
     || shExpMatch(host, "cdn.syndication.twimg.com")
     || shExpMatch(host, "syndication-o.twimg.com")
     || shExpMatch(host, "image-proxy-origin.twimg.com")
     || shExpMatch(host, "www.mobile01.com")
     || shExpMatch(host, "www.ucptt.com")
     || shExpMatch(host, "*.onion")
    )
    {
        return proxy;
    }

    return "DIRECT";
}
