import { Heart, MessageCircle, Send, Bookmark } from 'lucide-react';
import igPost from '@/assets/ig-post.jpg';

const instagramPhotos = [
  'https://scontent.cdninstagram.com/v/t51.82787-15/572002984_17916359442209380_4406261069515544098_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=110&ig_cache_key=Mzc1Nzk3MjQ4Njk1MzgyMjEwMQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTAzMi5zZHIuQzMifQ%3D%3D&_nc_ohc=9mF2Ve0TrOEQ7kNvwGgGBDa&_nc_oc=Adn2lqN9L6cONS586rj0hDx1NL3xNmHHiqo6S3NKixWPBQtIefUpzlUQepP3IFKS1gw_U1C8dOepQ7_JH_JnN_SU&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=yAyv-fjLuE4YEQM0RWNxkQ&oh=00_AfjarplVW0Ku92IK57n2FqYzdkRqUtn8zV9sDINYT_w-6w&oe=693399C3',
  'https://scontent.cdninstagram.com/v/t51.82787-15/571016685_17915094531209380_5995726691751250982_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=111&ig_cache_key=Mzc0OTM3NjY1NDAwMzk2NjkyNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=AJI-NNTtWPMQ7kNvwH6ieBo&_nc_oc=AdksQCwT4STfJGc0txnQFqSjdeWyfxr4uiJMaP6ZewlB8GK4S8ALG5FV7e23h0Bqq4Ra6D5Gdo1laI1V7lz_uf-H&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=yAyv-fjLuE4YEQM0RWNxkQ&oh=00_AfifWO3aT2ojTKoCIaPfWZC1n74xrM4rrGGVr7ikTsZSRQ&oe=6933BFD8',
  'https://scontent.cdninstagram.com/v/t51.71878-15/532704053_1674765416543089_9081454774769966987_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=109&ig_cache_key=MzY5OTM1MjE5MjM1MTk5MDE5Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHgxMTM2LnNkci5DMyJ9&_nc_ohc=Zu1baPb92sYQ7kNvwEtP3lI&_nc_oc=Adnu6zH7-7qPNbQvKqMGwejQLvUKovtOB5wPkuk_FAkNHNReNDGBT38ZSutDHnXAu4gTmb7ZpU2dIpsfLQzDXkC_&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=yAyv-fjLuE4YEQM0RWNxkQ&oh=00_Afjbg-Mw8qNyfELbLyMB_wmCWvK7cvaEZk8I-3Y7J592RQ&oe=6933CB13',
  'https://scontent.cdninstagram.com/v/t51.75761-15/498006339_18047025224525377_7931097688772392798_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=102&ig_cache_key=MzYzMzE5NjQ5NTM0NTc1NDQ0OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=VWNFOLIFVbwQ7kNvwEGHr_1&_nc_oc=AdligdfKAoAPqQFMKduDq61X4bwyGfpicnvl2PBgS2Ll3N2GsCKnjUSapxR2bGdZGLzAB_HleQOJUiLH9pWh65SD&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=yAyv-fjLuE4YEQM0RWNxkQ&oh=00_Afh4-wJNqEoMcRTr-5N4GWrJndq5_cvUrHx_lA69JV-RDg&oe=6933A064',
  'https://scontent.cdninstagram.com/v/t51.75761-15/497369780_18046756850525377_1395619671703042620_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=108&ig_cache_key=MzYzMTIyOTA3MDQ2NzQ3OTQzOQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjcyMHgxMjgwLnNkci5DMyJ9&_nc_ohc=ywFiiZOV5cAQ7kNvwH_UWvB&_nc_oc=Adkjf9CZZLSHNXljJ_fps94i5iFD4bh-Q2rN7T8TJIeNteg3T2T2BqnQRdPODszqhKYXkMIpQRFGTuPqA5MAyTh_&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=yAyv-fjLuE4YEQM0RWNxkQ&oh=00_Afic3t49plM6XIkFZlxVq6bTjJdcnBWz-Lm4j51oq6otlw&oe=6933AE56',
  'https://scontent.cdninstagram.com/v/t51.71878-15/503951961_630954716071542_1919645840617183679_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=109&ig_cache_key=MzM2NDU1Mjg2MTAzNzcwOTUwNg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=1HSD_iliZX4Q7kNvwHXURdY&_nc_oc=Adk5XsCp4tEwGDOi7PEPYuAzOXAXo3glpRHm4r9DDf76S4FQhfoJqirOZhvbtIgizgGv3pIn_TL9tTYQs4x7LNd2&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=yAyv-fjLuE4YEQM0RWNxkQ&oh=00_Afg11OheDYwGO3J2sgX2CTfVU7xfRASJMUpwRrXsHYYsBw&oe=6933BEA5',
  'https://scontent.cdninstagram.com/v/t51.75761-15/504057026_17898935136209380_2567071703742077015_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=108&ig_cache_key=MzY0NzE1OTAzNzUxOTM3NTQwMA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjcyMHgxMjgwLnNkci5DMyJ9&_nc_ohc=qzyzBL1R-dAQ7kNvwGaKKTz&_nc_oc=AdnXS-JP8jyljPdlxXr5dkPdM-zEWc9ptwOYNoNlTSHPdtNIRLAsHpNKKCNSty4sadsqPN5f9ryIxg3I6JLVlfVA&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=e4P8JYwmlHoNhLZ_d18KAw&oh=00_AfgyIHtbb45LYVMvSvcEdl3q4haFNpSnx7TcGlJ9REPrrw&oe=6933A514',
  'https://scontent.cdninstagram.com/v/t51.75761-15/506366464_17900257263209380_4170584656228342478_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=106&ig_cache_key=MzY1NTExODg3NjE0MjM0MDYyMA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjcyMHgxMjgwLnNkci5DMyJ9&_nc_ohc=OhY5ofYEGfUQ7kNvwEKsiUp&_nc_oc=Adl5418Jpzh2U3i_8mSEqv_J1EzupqfrU1Qb0t1P-b922MztnvtAXlkRgXL6m-fs8kHY1HQRLq6dSjoM-RxruZQ4&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=e4P8JYwmlHoNhLZ_d18KAw&oh=00_AfhY70ilI1FEfrmXaPW_9JUBGIbc8Pqef-ZD6Z-CAqiAlQ&oe=6933ADC3',
  'https://scontent.cdninstagram.com/v/t51.82787-15/552361888_17911845828209380_4991677305777114424_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=102&ig_cache_key=MzcyNzU5MTE5MjMxODk2OTM4MjE3OTExODQ1ODI1MjA5Mzgw.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjcyMHgxMjgwLnNkci5DMyJ9&_nc_ohc=4p5k2TiSwf0Q7kNvwH13KGE&_nc_oc=AdnunWgv01Z6T0TiaUyxxjIOkQ5fQxf-IpNql_UN7htnG4r7GM9-_XA5_xqh1cK-rlnapo4YJBYJD9vNmdS-j3cr&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=e4P8JYwmlHoNhLZ_d18KAw&oh=00_Afjjjl-Aik3jR3EiW02XtZ4M4xUI1ZHEeGExi6od-69pVA&oe=69339D96',
];

export const InstagramMockup = () => {
  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
      {/* Phone Mockup */}
      <div className="mx-auto w-full max-w-sm sticky lg:top-32">
        <div className="overflow-hidden rounded-3xl border-8 border-muted bg-background shadow-2xl">
          {/* Instagram Post */}
          <div className="bg-background">
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-border/50 p-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-primary/50"></div>
              <div className="flex-1">
                <p className="text-sm font-semibold">paez.of</p>
                <p className="text-xs text-muted-foreground">Music Artist</p>
              </div>
            </div>

            {/* Image */}
            <div className="aspect-square w-full bg-muted">
              <img
                src={igPost}
                alt="PÁEZ Instagram Post"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Actions */}
            <div className="space-y-2 p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Heart className="h-6 w-6 transition-all hover:scale-110 hover:text-destructive" />
                  <MessageCircle className="h-6 w-6 transition-all hover:scale-110" />
                  <Send className="h-6 w-6 transition-all hover:scale-110" />
                </div>
                <Bookmark className="h-6 w-6 transition-all hover:scale-110" />
              </div>
              <p className="text-xs">
                <span className="font-semibold">2,847 likes</span>
              </p>
              <p className="text-xs">
                <span className="font-semibold">paez.of</span> Nueva música próximamente...
                🔥
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Grid */}
      <div className="flex-1">
        <div className="grid grid-cols-3 gap-1">
          {instagramPhotos.map((photo, index) => (
            <div key={index} className="aspect-square overflow-hidden bg-muted">
              <img
                src={photo}
                alt={`Instagram Photo ${index + 1}`}
                className="h-full w-full object-cover transition-all hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
