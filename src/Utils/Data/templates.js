// Importing template images
import template_1 from "../Images/sample_1.jpg";
import template_2 from "../Images/sample_2.jpg";
import template_3 from "../Images/sample_3.jpg";
import template_4 from "../Images/sample_4.jpg";

// Importing template components
import Template1 from "../Templates/TemplateSpades";
import Template2 from "../Templates/TemplateDiamonds";
import Template3 from "../Templates/TemplateClubs";
import Template4 from "../Templates/TemplateAce";

// Array of template objects
export const templates = [
  {
    id: 1,
    template_name: "Template-1", // Name of the template
    template_img: template_1, // Image representing the template
    template: <Template1 />, // Component representing the template
  },
  {
    id: 2,
    template_name: "Template-2",
    template_img: template_2,
    template: <Template2 />,
  },
  {
    id: 3,
    template_name: "Template-3",
    template_img: template_3,
    template: <Template3 />,
  },
  {
    id: 4,
    template_name: "Template-4",
    template_img: template_4,
    template: <Template4 />,
  },
];
