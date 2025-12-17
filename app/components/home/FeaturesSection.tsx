// Features section component
function FeaturesSection() {
  const features = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Free Delivery",
      description: "On orders over GH₵100",
    },
    {
      icon: <RefreshCcw className="w-6 h-6" />,
      title: "Easy Returns",
      description: "30-day return policy",
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Chat with us anytime",
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Secure Payments",
      description: "Mobile money & cards",
    },
  ];

  return (
    <section className="py-12 bg-[#32CD32]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4"
            >
              <div className="w-14 h-14 bg-[#0A0A0A] rounded-full flex items-center justify-center mb-3 text-[#32CD32]">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-[#0A0A0A] mb-1">
                {feature.title}
              </h3>
              <p className="text-sm text-[#0A0A0A]/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}