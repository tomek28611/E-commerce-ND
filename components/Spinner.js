export default function Spinner() {
    return (
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full overflow-hidden animate-spin">
        <img src="/wheel.jpg" alt="Loading..." className="w-full h-full object-contain" />
      </div>
    );
  }
  