import React from "react";
import logo from './logo.module.css';

const Logo = () => {
  return (
    <svg className={logo.shadow}
      xmlns="http://www.w3.org/2000/svg"
      width="600"
      height="200"
      viewBox="0 0 299 88"
    >
      <g fill="#000" stroke="none">
        <path
          d="M.58 59.91h19.964V43.96h16.402V27.64H20.544v-9.335h21.562V1.924H.58v57.985zm44.659 0h19.227V.192H45.239v59.716zm24.08 0h19.227V16.203H69.319v43.705zm-.123-46.488h19.473V.192H69.196v13.23zm44.658 1.669c-15.295 0-21.5 5.254-21.5 22.934 0 16.506 4.607 22.997 21.5 22.997 7.495 0 15.726-2.411 15.726-2.411l-.614-15.146s-9.03.619-12.286.619c-3.686 0-4.914-1.484-4.914-6.059 0-4.512 1.29-6.058 4.914-6.058 3.256 0 12.101.68 12.101.68l.615-15.33s-8.907-2.226-15.542-2.226zm38.762 44.818V47.113h2.58l4.054 12.796h19.289l-6.758-22.564 6.205-21.141h-18.982l-3.87 14.032h-2.518V.193h-19.227v59.716h19.227zm28.503 0h19.902V30.051h.983l4.915 29.24h16.647l4.975-29.24h.983v29.858h19.965V1.924h-30.53l-3.748 22.13-4.422-22.13h-29.67v57.985zm95.705-13.167c-2.948 0-4.115-.866-4.238-3.03h24.878l.86-8.53c0-13.786-7.555-20.091-22.483-20.091-15.971 0-22.482 8.53-22.482 23.8 0 15.33 5.712 22.13 22.052 22.13 10.628 0 22.053-2.472 22.053-2.472L297.034 46s-12.285.742-20.21.742zm-4.3-13.6c.062-3.153.737-4.575 3.317-4.575 2.335 0 3.195 1.298 3.195 4.575h-6.512z"
          transform="translate(-33 -80) translate(33 80) translate(0 .308)"
        />
        <path
          d="M.478 2.217a.452.452 0 01-.342-.134.497.497 0 01-.128-.358c0-.144.042-.261.128-.35a.452.452 0 01.342-.133c.138 0 .25.044.335.133a.485.485 0 01.128.35c0 .15-.043.27-.128.358a.442.442 0 01-.335.134zm.28 1.133v5.833H.198V3.35h.558zm11.399 0h.597L10.42 9.183H9.86L7.525 3.35h.63l1.993 5.242 2.009-5.242zm7.804-2.158l-.16 2.391h-.446V1.192h.606zm11.638 4.933c0 .133-.008.261-.024.383h-4.424c.037.717.24 1.275.606 1.675.367.4.858.6 1.475.6.44 0 .818-.091 1.132-.275.318-.189.55-.452.693-.791l.462.25a2.294 2.294 0 01-.892.991c-.383.228-.848.342-1.395.342-.824 0-1.467-.27-1.93-.808-.467-.534-.701-1.275-.701-2.225 0-.95.226-1.692.678-2.225.446-.54 1.076-.809 1.889-.809.76 0 1.355.264 1.785.792.43.528.646 1.228.646 2.1zM29.168 3.75c-.6 0-1.076.194-1.427.583-.35.395-.547.945-.59 1.65h3.922c-.037-.7-.22-1.247-.55-1.641-.33-.395-.781-.592-1.355-.592zm21.292-.517c.792 0 1.416.27 1.873.809.457.533.686 1.275.686 2.225 0 .95-.229 1.691-.686 2.225-.457.539-1.081.808-1.873.808-.5 0-.93-.125-1.292-.375a2.068 2.068 0 01-.78-1.05l-.033 1.308h-.502V.667h.558v3.916c.17-.416.436-.747.797-.991a2.217 2.217 0 011.252-.359zm-.064 5.55c.648 0 1.153-.222 1.515-.666.366-.45.55-1.067.55-1.85 0-.784-.184-1.4-.55-1.85-.362-.445-.867-.667-1.515-.667-.58 0-1.05.206-1.41.617-.357.41-.548.975-.575 1.691v.417c.027.717.218 1.28.574 1.692.361.41.832.616 1.411.616zm14.476-2.658c0 .133-.008.261-.024.383h-4.432c.037.717.24 1.275.606 1.675.372.4.866.6 1.483.6.436 0 .813-.091 1.132-.275.313-.189.542-.452.685-.791l.47.25a2.294 2.294 0 01-.892.991c-.388.228-.853.342-1.395.342-.83 0-1.475-.27-1.937-.808-.468-.534-.702-1.275-.702-2.225 0-.95.226-1.692.678-2.225.451-.54 1.081-.809 1.889-.809.76 0 1.355.264 1.786.792.435.528.653 1.228.653 2.1zM62.433 3.75c-.6 0-1.076.194-1.427.583-.35.395-.547.945-.59 1.65h3.93c-.037-.7-.223-1.247-.558-1.641-.33-.395-.781-.592-1.355-.592zm14.253 2.375c0 .133-.008.261-.024.383h-4.424c.037.717.24 1.275.606 1.675.367.4.858.6 1.475.6.44 0 .82-.091 1.14-.275.313-.189.542-.452.685-.791l.462.25a2.294 2.294 0 01-.892.991c-.383.228-.848.342-1.395.342-.824 0-1.467-.27-1.93-.808-.467-.534-.701-1.275-.701-2.225 0-.95.226-1.692.678-2.225.446-.54 1.076-.809 1.889-.809.76 0 1.355.264 1.785.792.43.528.646 1.228.646 2.1zM74.255 3.75c-.6 0-1.076.194-1.427.583-.35.395-.547.945-.59 1.65h3.922c-.037-.7-.22-1.247-.55-1.641-.33-.395-.781-.592-1.355-.592zm12.22-.517c.638 0 1.153.186 1.547.559.388.372.582.908.582 1.608v3.783h-.558V5.592c0-.623-.144-1.086-.43-1.392-.293-.3-.692-.45-1.197-.45-.356 0-.688.083-.996.25a1.888 1.888 0 00-.725.75 2.273 2.273 0 00-.28 1.142v3.291h-.558V3.35h.503l.024 1.175c.18-.417.454-.736.82-.958.367-.223.79-.334 1.268-.334zM109.68 8.8c.186 0 .33-.028.43-.083l-.031.466c-.133.078-.316.117-.55.117-.26 0-.47-.075-.63-.225-.165-.144-.258-.4-.279-.767-.175.311-.452.553-.829.725a2.772 2.772 0 01-1.196.267c-.547 0-.988-.128-1.323-.383-.33-.256-.494-.623-.494-1.1 0-.9.707-1.484 2.12-1.75l1.706-.317v-.508c0-.467-.133-.834-.398-1.1-.26-.261-.633-.392-1.116-.392-.888 0-1.483.411-1.786 1.233l-.423-.325c.16-.46.43-.814.814-1.058.377-.244.842-.367 1.395-.367.648 0 1.155.164 1.522.492.367.333.55.814.55 1.442v3.016c0 .411.173.617.518.617zm-3.029-.017a2.6 2.6 0 00.917-.166c.297-.111.545-.278.741-.5.197-.223.295-.49.295-.8V6.233l-1.53.292c-.6.117-1.04.28-1.316.492-.276.205-.414.472-.414.8 0 .31.117.55.35.716.229.167.548.25.957.25zm21.587-5.55c.787 0 1.408.27 1.865.809.457.533.686 1.275.686 2.225 0 .95-.229 1.691-.686 2.225-.457.539-1.078.808-1.865.808-.5 0-.933-.125-1.3-.375a2.129 2.129 0 01-.78-1.05l-.032 1.308h-.503V.667h.558v3.916c.17-.416.436-.747.798-.991a2.231 2.231 0 011.259-.359zm-.072 5.55c.649 0 1.156-.222 1.523-.666.361-.45.542-1.067.542-1.85 0-.784-.18-1.4-.542-1.85-.367-.445-.874-.667-1.523-.667-.579 0-1.047.206-1.403.617-.356.41-.55.975-.582 1.691v.417c.032.717.226 1.28.582 1.692.356.41.824.616 1.403.616zm14.325.017c.186 0 .33-.028.43-.083l-.031.466c-.133.078-.317.117-.55.117-.26 0-.47-.075-.63-.225-.165-.144-.258-.4-.28-.767-.174.311-.45.553-.828.725a2.772 2.772 0 01-1.196.267c-.547 0-.988-.128-1.323-.383-.33-.256-.494-.623-.494-1.1 0-.9.706-1.484 2.12-1.75l1.706-.317v-.508c0-.467-.13-.834-.39-1.1-.266-.261-.641-.392-1.125-.392-.887 0-1.482.411-1.785 1.233l-.423-.325c.16-.46.43-.814.813-1.058.378-.244.843-.367 1.395-.367.649 0 1.156.164 1.523.492.367.333.55.814.55 1.442v3.016c0 .411.173.617.518.617zm-3.03-.017a2.6 2.6 0 00.918-.166c.297-.111.544-.278.741-.5.197-.223.295-.49.295-.8V6.233l-1.53.292c-.601.117-1.04.28-1.316.492-.276.205-.414.472-.414.8 0 .31.117.55.35.716.229.167.548.25.957.25zm14.43-8.116h.557v8.516h-.502l-.032-1.308a2.068 2.068 0 01-.78 1.05c-.362.25-.793.375-1.292.375-.792 0-1.417-.27-1.874-.808-.457-.534-.685-1.275-.685-2.225 0-.95.228-1.692.685-2.225.457-.54 1.082-.809 1.874-.809.483 0 .903.12 1.26.359.355.244.618.575.788.991V.667zm-1.986 8.116c.58 0 1.05-.202 1.411-.608.357-.411.548-.967.574-1.667v-.483c-.037-.7-.23-1.256-.582-1.667-.356-.405-.823-.608-1.403-.608-.648 0-1.153.222-1.514.667-.367.45-.55 1.066-.55 1.85 0 .783.183 1.4.55 1.85.361.444.866.666 1.514.666zm25.868-5.558c.622 0 1.127.186 1.515.558.393.373.59.909.59 1.609v3.783h-.558V5.45c0-.561-.147-.986-.439-1.275-.292-.294-.683-.442-1.172-.442-.356 0-.68.09-.972.267a2.003 2.003 0 00-.71.75 2.181 2.181 0 00-.263 1.075v3.358h-.558V5.458c0-.555-.143-.98-.43-1.275-.292-.289-.683-.433-1.172-.433-.345 0-.667.083-.965.25a1.905 1.905 0 00-.717.75 2.31 2.31 0 00-.271 1.133v3.3h-.558V3.35h.502l.032 1.167c.18-.406.452-.72.813-.942a2.265 2.265 0 011.22-.342c.473 0 .89.117 1.251.35.356.234.603.573.742 1.017a1.88 1.88 0 01.82-1.008 2.44 2.44 0 011.3-.367zm11.91.008c.829 0 1.48.27 1.953.809.467.544.701 1.286.701 2.225 0 .939-.234 1.68-.701 2.225-.473.539-1.124.808-1.953.808-.824 0-1.473-.27-1.945-.808-.473-.545-.71-1.286-.71-2.225 0-.94.237-1.68.71-2.225.472-.54 1.12-.809 1.945-.809zm0 .5c-.654 0-1.167.225-1.539.675-.372.456-.558 1.075-.558 1.859 0 .783.186 1.402.558 1.858.372.45.885.675 1.539.675.653 0 1.166-.225 1.538-.675.372-.456.558-1.075.558-1.858 0-.784-.186-1.403-.558-1.859-.372-.45-.885-.675-1.538-.675zm13.615-.383h.59l-2.328 5.833h-.558l-2.336-5.833h.63l1.993 5.242 2.009-5.242zm7.637-1.133a.452.452 0 01-.343-.134.497.497 0 01-.128-.358c0-.144.043-.261.128-.35a.452.452 0 01.343-.133c.138 0 .252.044.342.133a.485.485 0 01.128.35c0 .15-.043.27-.128.358a.469.469 0 01-.342.134zm.279 1.133v5.833h-.558V3.35h.558zm12.22 2.775c0 .133-.008.261-.024.383h-4.432c.037.717.242 1.275.614 1.675.366.4.858.6 1.474.6.442 0 .819-.091 1.132-.275.32-.189.548-.452.686-.791l.47.25a2.294 2.294 0 01-.893.991c-.387.228-.852.342-1.395.342-.823 0-1.469-.27-1.937-.808-.462-.534-.693-1.275-.693-2.225 0-.95.223-1.692.67-2.225.451-.54 1.084-.809 1.897-.809.754 0 1.35.264 1.785.792.43.528.646 1.228.646 2.1zm-2.431-2.375c-.606 0-1.084.194-1.435.583-.346.395-.542.945-.59 1.65h3.93c-.037-.7-.22-1.247-.55-1.641-.335-.395-.787-.592-1.355-.592z"
          transform="translate(-33 -80) translate(33 80) translate(39 78.308)"
        />
      </g>
    </svg>
  );
};

export default Logo;
