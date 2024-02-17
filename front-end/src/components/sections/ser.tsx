const containerRef = useRef<HTMLDivElement>(null);
const [activeIndex, setActiveIndex] = useState<number>(0); // Initially first button active

const handleMouseLeave = (event: MouseEvent) => {
  if (!containerRef.current?.contains(event.relatedTarget as Node)) {
    setActiveIndex(0); // Reset to first button on leave
  }
};

const handleButtonHover = (index: number) => {
  setActiveIndex(index);
};

<Container
  display="flex"
  className="flex-col  w-2/3 group/services"
  alignItems="flex-start"
  ref={containerRef}
  justifyContent="flex-start"
  onMouseLeave={handleMouseLeave}
>
  <ServiceButton
    title="Build"
    isActive={activeIndex === 0}
    onMouseEnter={() => handleButtonHover(0)}
  >
    Setting the standard for master planning work for real estate development
    and redevelopment projects around the world.
  </ServiceButton>
  <ServiceButton
    title="Expertise"
    isActive={activeIndex === 1}
    onMouseEnter={() => handleButtonHover(1)}
  >
    Expertise
  </ServiceButton>
  <ServiceButton
    title="Rent"
    isActive={activeIndex === 2}
    onMouseEnter={() => handleButtonHover(2)}
  >
    Rent
  </ServiceButton>
  <ServiceButton
    title="Rent"
    onMouseEnter={() => handleButtonHover(3)}
    isActive={activeIndex === 3}
  >
    Rent
  </ServiceButton>
</Container>;
