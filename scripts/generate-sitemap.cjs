	const fs = require('fs');
	const { SitemapStream, streamToPromise } = require('sitemap');
	
	const sitemap = new SitemapStream({ hostname: 'https://www.srimonitech.com' });
	
	const pages = [
	  '/',               
	  '/services',         
	  '/about',      
	  '/faq',       
	  '/contact',       
	];
	
	pages.forEach(page => {
	  sitemap.write({ url: page, changefreq: 'weekly', priority: 0.8 });
	});
	
	sitemap.end();
	
	streamToPromise(sitemap).then(data => {
	  fs.writeFileSync('./public/sitemap.xml', data.toString());
	  console.log('✅ Sitemap generated successfully!');
});
