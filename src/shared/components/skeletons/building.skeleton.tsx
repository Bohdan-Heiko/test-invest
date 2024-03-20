import ContentLoader, { Rect, Circle, Instagram } from "react-content-loader/native"

export const BuildingSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={300}
      height={530}
      viewBox="0 0 300 530"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <Circle cx="815" cy="67" r="8" />
      <Rect x="587" y="36" rx="5" ry="5" width="220" height="10" />
      <Circle cx="741" cy="118" r="8" />
      <Rect x="709" y="68" rx="5" ry="5" width="220" height="10" />
      <Circle cx="815" cy="125" r="8" />
      <Rect x="738" y="126" rx="5" ry="5" width="220" height="10" />
      <Circle cx="540" cy="468" r="8" />
      <Rect x="672" y="191" rx="5" ry="5" width="220" height="10" />
      <Rect x="402" y="452" rx="23" ry="23" width="234" height="106" />
      <Rect x="2" y="4" rx="20" ry="20" width="293" height="224" />
      <Rect x="2" y="247" rx="7" ry="7" width="199" height="23" />
      <Rect x="2" y="329" rx="5" ry="5" width="245" height="16" />
      <Rect x="2" y="354" rx="5" ry="5" width="245" height="16" />
      <Rect x="2" y="279" rx="7" ry="7" width="199" height="23" />
      <Rect x="2" y="379" rx="5" ry="5" width="245" height="16" />
      <Rect x="2" y="455" rx="5" ry="5" width="245" height="16" />
      <Rect x="2" y="430" rx="5" ry="5" width="245" height="16" />
      <Rect x="2" y="405" rx="5" ry="5" width="245" height="16" />
      <Rect x="2" y="479" rx="5" ry="5" width="245" height="16" />
    </ContentLoader>
  )
}
