var nodes = $("#nodes");
var nav_nodes = $("#nav_nodes");

var tl = new TimelineMax();

tl.to(nodes, 5, {rotation:"+=360", transformOrigin:"50% 50%", repeat:-1, ease:Linear.easeNone})
.to(nav_nodes, 5, {rotation:"+=360", transformOrigin:"50% 50%", repeat:-1, ease:Linear.easeNone});
