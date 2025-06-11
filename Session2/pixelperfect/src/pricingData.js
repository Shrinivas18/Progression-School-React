const pricingData = [
    {
      id: 1,
      plan: "Basic",
      description: "Perfect for startups and small businesses",
      price: "Free",
      features: [
        "5 Project Templates",
        "Basic Analytics Dashboard",
        "Email Support"
      ],
      isPopular: false
    },
    {
      id: 2,
      plan: "Professional",
      description: "Ideal for growing businesses and teams",
      price: "$32.00",
      features: [
        "25 Project Templates", 
        "Advanced Analytics & Reports",
        "Priority Support",
        "Team Collaboration Tools"
      ],
      isPopular: true
    },
    {
      id: 3,
      plan: "Enterprise",
      description: "For large organizations with complex needs",
      price: "$50.00",
      features: [
        "Unlimited Project Templates",
        "Custom Analytics Solutions",
        "24/7 Dedicated Support",
        "Advanced Security Features"
      ],
      isPopular: false
    }
  ];

  export default pricingData;