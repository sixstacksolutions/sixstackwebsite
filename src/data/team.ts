/**
 * The founding team, shown on /about.
 *
 * All six are co-founders; the card renders "Co-founder" under every title, so
 * `title` carries only the executive role.
 *
 * Photos live at /public/images/team/<photo>.jpg. After adding or replacing
 * one, run `npm run images` to regenerate the WebP — SmartImage serves that in
 * preference to the JPEG, and a stale or missing WebP means the heavier file
 * gets shipped instead.
 *
 * If a photo is missing entirely, SmartImage falls back to a generated
 * illustration. That is fine for a service card and wrong for a person, so
 * check /about renders real faces after any change here.
 */

export type TeamMember = {
  /** Full name as it should appear publicly. */
  name: string;
  /** Executive title. "Co-founder" is added by the card, not stored here. */
  title: string;
  /** Filename stem under /public/images/team/. */
  photo: string;
  /** One line on what they own. Written without pronouns. */
  focus: string;
};

export const team: TeamMember[] = [
  {
    name: "Mohammad Amman",
    title: "Chief Executive Officer",
    photo: "mohammad-amman",
    focus: "Direction, partnerships and how we work with clients.",
  },
  {
    name: "Abdul Manan",
    title: "Chief Technology Officer",
    photo: "abdul-manan",
    focus: "Architecture, engineering standards and technical direction.",
  },
  {
    name: "Moeen Arshad",
    title: "Chief Financial Officer",
    photo: "moeen-arshad",
    focus: "Commercials, planning and keeping projects sustainable.",
  },
  {
    name: "Mohsin Ashfaq",
    title: "Chief Operating Officer",
    photo: "mohsin-ashfaq",
    focus: "Delivery, process and making sure work ships on time.",
  },
  {
    name: "Muqarrab Mustafa",
    title: "Chief Product Officer",
    photo: "muqarrab-mustafa",
    focus: "Product thinking, design quality and user experience.",
  },
  {
    name: "Abuzar Haroon",
    title: "Chief Information Security Officer",
    photo: "abuzar-haroon",
    focus: "Security, infrastructure and platform reliability.",
  },
];
