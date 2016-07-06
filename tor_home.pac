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

    if (shExpMatch(host, "*.nytimes.com") || 
        shExpMatch(host, "*.reuters.com") || 
        shExpMatch(host, "*.reutersmedia.com") || 
        shExpMatch(host, "*.bbci.co.uk") || 
        shExpMatch(host, "theinitium.com") || 
        shExpMatch(host, "*.imgbox.com") || 
        shExpMatch(host, "*.dropbox.com") || 
        shExpMatch(host, "www.alliance.org.hk") || 
        shExpMatch(host, "*.scmp.com") || 
        shExpMatch(host, "chinadigitaltimes.net") || 
        shExpMatch(host, "evchk.wikia.com") || 
        shExpMatch(host, "www.putty.org") || 
        shExpMatch(host, "chinapower.csis.org") || 
        shExpMatch(host, "www.malwaretech.com") || 
        shExpMatch(host, "*.tumblr.com") || 
        shExpMatch(host, "*.jpl.nasa.gov"))
    {
        return "SOCKS5 127.0.0.1:9150; SOCKS 127.0.0.1:9150; SOCKS5 10.10.1.29:9150; SOCKS 10.10.1.29:9150; DIRECT";
    }

    return "DIRECT";
}