# Indian Temples Encyclopedia - Next.js Website

A comprehensive, SEO-optimized Next.js website serving as a complete encyclopedia of Indian temples. Discover detailed information about temples across India, including their history, architecture, mythological significance, and pilgrimage importance.

## 🏛️ Features

### Core Functionality

- **Complete Temple Database**: Comprehensive information about temples across India
- **Advanced Search & Filters**: Search by state, deity, architecture style, category, and pilgrimage importance
- **Individual Temple Pages**: Detailed pages for each temple with SEO optimization
- **Interactive Maps**: Leaflet-based maps showing temple locations across India
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Performance Optimized**: Next.js Image optimization, code splitting, and Core Web Vitals optimization
- **Analytics Integration**: Google Analytics 4, Vercel Analytics, and Speed Insights
- **CDN Images**: High-quality temple images from Unsplash CDN

### Temple Information Includes

- **Historical Data**: Built by, built in, dynasty, significance
- **Architecture Details**: Style, features, materials, dimensions
- **Mythological Context**: Stories, legends, associated deities
- **Pilgrimage Information**: Importance level, best seasons, festivals
- **Visiting Information**: Timings, address, accessibility, guidelines
- **Image Galleries**: Main images, architecture photos, festival images

### SEO Features

- **Technical SEO**: Proper meta tags, Open Graph, Twitter Cards
- **Structured Data**: Schema markup for temples and places
- **Sitemap Generation**: Automated sitemap creation with dynamic routes
- **Performance**: Optimized images, lazy loading, and caching strategies
- **Accessibility**: WCAG 2.1 AA compliance with proper semantic HTML

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/adey96/temple-guides.git
   cd temple-guides
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Update the environment variables with your actual values:

   - `NEXT_PUBLIC_GA_ID`: Google Analytics tracking ID
   - `SITE_URL`: Your website URL for sitemap generation

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
temple-guides/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── temples/           # Temple listing and individual pages
│   │   │   ├── page.tsx       # Temples listing with filters
│   │   │   └── [slug]/        # Individual temple pages
│   │   │       └── page.tsx   # Dynamic temple page
│   │   ├── maps/              # Interactive maps page
│   │   ├── states/            # State-wise temple listings
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact page
│   │   ├── api/               # API routes
│   │   └── layout.tsx         # Root layout
│   ├── components/            # React components
│   │   ├── ui/                # Reusable UI components
│   │   ├── layout/            # Layout components (Header, Footer)
│   │   ├── forms/             # Form components
│   │   ├── seo/               # SEO components
│   │   └── TempleMap.tsx      # Interactive map component
│   ├── data/                  # Static data files
│   │   ├── temples.ts         # Comprehensive temple data (318 temples)
│   │   ├── temple-updates.ts  # Dynamic content management
│   │   └── blog-posts.ts      # Blog content
│   └── lib/                   # Utility functions
│       ├── utils.ts           # Common utilities
│       ├── seo.ts             # SEO configuration
│       └── analytics.ts        # Analytics functions
├── public/                     # Static assets
├── next.config.ts              # Next.js configuration
├── tailwind.config.js          # Tailwind CSS configuration
└── next-sitemap.config.js      # Sitemap configuration
```

## 🎨 Design & Features

### Design System

- **Colors**: Amber/orange theme reflecting heritage and spirituality
- **Typography**: Inter font family for readability
- **Components**: Consistent UI components with Tailwind CSS
- **Responsive**: Mobile-first design with breakpoints for all devices

### Key Features

- **Temple Search**: Advanced search with multiple filters
- **Interactive Maps**: Leaflet-based maps with temple markers
- **Category Browsing**: Browse by Ancient, Medieval, Modern, UNESCO Heritage
- **State-wise Navigation**: Find temples by Indian states
- **Pilgrimage Priority**: High, Medium, Low priority classification
- **Image Galleries**: High-quality CDN images for each temple
- **Detailed Information**: Comprehensive data for each temple

## 📊 SEO Implementation

### Technical SEO

- **Meta Tags**: Dynamic meta tags for all pages
- **Structured Data**: JSON-LD schema markup for temples
- **Sitemap**: Automated sitemap generation
- **Robots.txt**: Search engine crawling instructions
- **Canonical URLs**: Proper canonical link implementation

### Content SEO

- **Keyword Research**: Target keywords for temple searches
- **Content Strategy**: Educational content about temple histories
- **Internal Linking**: Strategic internal linking between related pages
- **Image Optimization**: Proper alt tags and responsive images

### Performance SEO

- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Image Optimization**: Next.js Image component with WebP support
- **Code Splitting**: Dynamic imports for heavy components
- **Caching**: Static generation and ISR for optimal performance

## 🏛️ Temple Data Structure

Each temple includes comprehensive information:

```typescript
interface Temple {
  // Basic Information
  name: string;
  slug: string;
  state: string;
  city: string;
  deity: string;

  // Categorization
  category: "Ancient" | "Medieval" | "Modern" | "UNESCO";
  architecture: {
    style: string;
    features: string[];
    materials: string[];
    dimensions: string;
  };

  // Historical Context
  historical: {
    builtBy: string;
    builtIn: string;
    dynasty: string;
    significance: string;
  };

  // Mythological Context
  mythological: {
    story: string;
    legends: string[];
    associatedGods: string[];
  };

  // Pilgrimage Information
  pilgrimage: {
    importance: "High" | "Medium" | "Low";
    season: string[];
    festivals: string[];
  };

  // Visiting Information
  location: {
    address: string;
    coordinates: { lat: number; lng: number };
    accessibility: string;
  };
  timings: {
    morning: string;
    evening: string;
    specialDays: string;
  };

  // SEO & Content
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  content: {
    overview: string;
    history: string;
    architecture: string;
    significance: string;
    festivals: string;
    visitingInfo: string;
  };

  // Images
  images: {
    main: string;
    gallery: string[];
    architecture: string[];
    festivals: string[];
  };
}
```

## 🔧 Configuration

### Next.js Configuration

The `next.config.ts` file includes:

- Image optimization settings for CDN images
- Compression and performance optimizations
- Security headers configuration

### Tailwind CSS

Custom configuration in `tailwind.config.js`:

- Extended color palette for heritage theme
- Custom spacing and typography
- Component-specific utilities

### Analytics Setup

- **Google Analytics 4**: Page views and event tracking
- **Vercel Analytics**: Performance monitoring
- **Speed Insights**: Core Web Vitals tracking

## 📝 Adding New Temples

To add new temples to the encyclopedia:

1. **Add to Data File**: Update `src/data/temples.ts`
2. **Follow Structure**: Use the Temple interface structure
3. **SEO Optimization**: Include proper SEO metadata
4. **Images**: Add CDN image URLs
5. **Content**: Provide comprehensive information

Example:

```typescript
{
  id: "4",
  name: "Temple Name",
  slug: "temple-name-location",
  state: "State Name",
  city: "City Name",
  deity: "Deity Name",
  // ... rest of the structure
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms

The application can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📈 Performance Metrics

### Target Metrics

- **Lighthouse Score**: 90+ across all categories
- **Core Web Vitals**: All metrics in "Good" range
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

### Monitoring

- Real-time performance monitoring with Vercel Analytics
- Google Analytics for user behavior tracking
- Search Console for SEO performance monitoring

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-temple`)
3. Add temple data following the structure
4. Commit your changes (`git commit -m 'Add new temple'`)
5. Push to the branch (`git push origin feature/new-temple`)
6. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:

- Email: info@indiantemples.com
- Website: [indiantemples.com](https://indiantemples.com)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Vercel for hosting and analytics
- Unsplash for high-quality temple images
- All contributors who help expand the temple database

---

**Indian Temples Encyclopedia** - Discover India's Sacred Heritage
