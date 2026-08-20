/**
 * Journal data — placeholder/demo content.
 * Clearly structured for easy replacement with real CMS/API data.
 */

export const JOURNAL_ARTICLES = [
  {
    slug: 'the-material-conversation',
    title: 'The Material Conversation',
    subtitle: 'Why the texture of a wall matters more than its colour',
    category: 'Material Stories',
    date: '12 August 2026',
    readTime: '6 min read',
    coverImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'We have become obsessed with colour in interior design — but texture is the quality that actually changes how a room feels to inhabit. A room with a single material in several finishes will always outperform a room with many colours in flat surfaces.',
    body: [
      'The obsession with colour palettes in interior design has, in many ways, obscured what makes rooms genuinely pleasurable to be in: the tactile intelligence of its materials.',
      'When you enter a room clad in Venetian plaster, the light does not behave uniformly. It catches and releases at every small variation in the surface. The room seems to breathe. Compare this with a perfectly flat-painted drywall in the same colour — technically identical, experientially worlds apart.',
      'This is why, in our studio, every project begins with a material edit before a colour conversation. We ask: what should this room feel like to touch? What should the quality of the light be at eight in the morning?',
      'The answers to these questions lead us to specific materials — and the colours emerge from those materials naturally.',
    ],
    isPlaceholder: true,
  },
  {
    slug: 'light-as-a-design-tool',
    title: 'Light as a Design Tool',
    subtitle: 'How we think about natural and artificial light in every project',
    category: 'Design Thinking',
    date: '28 July 2026',
    readTime: '8 min read',
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'There is no single design decision more consequential than how light enters and moves through a space. Yet it remains among the most underinvested aspects of residential interiors in India.',
    body: [
      'In Mumbai, natural light is one of our most valuable raw materials — and also one of the most complicated. The city faces the Arabian Sea to the west. Apartments that look west receive extraordinary evening light but suffer from intense afternoon heat.',
      'We approach every project by mapping the light at different times of day and across different seasons before a single piece of furniture is placed. This map then determines the orientation of the furniture plan, the choice of window treatments, and the placement of artificial lighting layers.',
      'Good artificial lighting does not fill a room uniformly. It creates zones, highlights surfaces, and — crucially — remains invisible when it is doing its job properly.',
    ],
    isPlaceholder: true,
  },
  {
    slug: 'the-case-for-empty-space',
    title: 'The Case for Empty Space',
    subtitle: 'On restraint, negative space, and the courage to leave walls bare',
    category: 'Design Thinking',
    date: '10 July 2026',
    readTime: '5 min read',
    coverImage: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Every room we design begins with a conversation about what to remove. Not what to add. The most common mistake in interior design is excess — too much furniture, too many objects, too many colours fighting for attention.',
    body: [
      'The most common brief we receive contains the phrase "make it feel warm and cosy." The most common mistake people make in pursuit of this is to fill every surface with objects, every wall with art, every corner with furniture.',
      'Warmth in a room comes from material quality, not material quantity. A bare limestone wall with a single sculptural light fitting will feel warmer than the same wall covered in a gallery of framed prints.',
      'Empty space is not absence. It is the frame through which you experience everything else. It is the silence that makes the music audible.',
    ],
    isPlaceholder: true,
  },
  {
    slug: 'alibaug-villa-story',
    title: 'Designing for the Coast',
    subtitle: 'Notes from the Alibaug villa project — materials, decisions, and what the sea demands',
    category: 'Project Stories',
    date: '22 June 2026',
    readTime: '10 min read',
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Coastal projects demand a different kind of honesty from the materials you choose. Everything will be tested — by humidity, salt air, UV exposure, and the relentless way the sea seems to demand that interiors remain loose and unguarded.',
    body: [
      'When we first visited the Alibaug site, the sea was visible from every elevation of the property. The brief was simple: make the interior feel like the exterior.',
      'This is harder than it sounds. The instinct is to resist the outside — to create a refuge from the elements. But the clients wanted something different: a house that felt as though it were dissolving into the landscape.',
      'Every material we chose had to perform in a salt-air environment. Marine-grade teak for the external joinery. Kota stone on the floors — cooler underfoot than any other option. Hand-cast concrete for the countertops, which would develop a patina over time.',
    ],
    isPlaceholder: true,
  },
];

export const JOURNAL_CATEGORIES = ['All', 'Design Thinking', 'Material Stories', 'Project Stories', 'Studio Updates'];

export function getArticleBySlug(slug) {
  return JOURNAL_ARTICLES.find((a) => a.slug === slug) || null;
}

export function getRelatedArticles(currentSlug, count = 2) {
  return JOURNAL_ARTICLES.filter((a) => a.slug !== currentSlug).slice(0, count);
}
