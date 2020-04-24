public class TodayTasks {
    public TodayTasks() {
       // takeShower();
       // havingBreakFast();
       // carServicing();
       //  moveWithGirlFriend();
    }
    public static void takeShower(){
        System.debug('I am taking shower only 1');
    }
    public static void havingBreakFast(){
        System.debug('I am having breakfast');
    }
    @future
    public static void carServicing(){
        System.debug('Car Servicing started');
        for (Integer i = 0; i < 100; i++) {
            //System.debug('They started Car Servicing now');
        }
        System.debug('Car Servicing ends');
    }
    public static void moveWithGirlFriend(){
        System.debug('I am having moveWithGirlFriend now');
    }
    public static void callQueable(){
        System.enqueueJob(new FirstJobQueable());
    }
    public void hiThere(){
        System.debug('Hi there');
    }
}
